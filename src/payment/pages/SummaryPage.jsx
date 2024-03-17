import { Alert, Button, Grid, IconButton, Modal, Snackbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useMemo, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { startFinishingPay } from "../../store/payment/thunks";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "3px solid #1b4332",
    boxShadow: 24,
    p: 3,
    borderRadius: 3,
    maxHeight: "90%",
    overflow: "auto",
};
const shippingValue = 4.5;

export const SummaryPage = ({ handleClose, handleOpen }) => {
    const [openToast, setOpenToast] = useState(false);

    const handleCloseToast = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenToast(false);
    };

    const { status: statusPay, price, title, creditCard, adress, message } = useSelector((state) => state.payment);
    const { displayName } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const isChecking = useMemo(() => statusPay === "checking", [statusPay]);

    const makePayment = async() => {
        try {
            await dispatch(startFinishingPay());
            handleClose();
            setOpenToast(true);
        } catch (error) {
            console.error("Payment error:", error);
        }
    };

    return (
        <>
            <Modal
                open={handleOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        align="center"
                    >
                        Summary
                    </Typography>
                    <hr></hr>
                    <Typography textAlign="justify">
                        Dear {displayName} you are buying:
                    </Typography>

                    <Grid container alignContent="baseline">
                        <Grid item xs={6}>
                            <hr></hr>
                            <Typography fontWeight="800" align="center">
                                Item
                            </Typography>
                            <Typography height={80}>* {title}</Typography>
                            <Typography height={30}>* Shipping</Typography>
                            <hr></hr>
                            <Typography height={30}>* Total</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <hr></hr>
                            <Typography fontWeight="800" align="center">
                                Price
                            </Typography>
                            <Typography height={80} align="center">
                                ${price}
                            </Typography>
                            <Typography height={30} align="center">
                                $4.50
                            </Typography>
                            <hr></hr>
                            <Typography height={30} align="center">
                                ${price + shippingValue}
                            </Typography>
                        </Grid>
                    </Grid>
                    <hr></hr>
                    <Typography>
                        With your credit card number: **** - **** - **** -{" "}
                        {creditCard?.slice(-4)}
                    </Typography>
                    <Typography>
                        This product will be delivered to the following address:{" "}
                        {adress}
                    </Typography>
                    <Button
                        variant="contained"
                        size="small"
                        disabled={isChecking}
                        onClick={makePayment}
                        sx={{
                            mt: 1,
                            width: "100%",
                            display: "flex",
                            justifySelf: "center",
                        }}
                    >
                        Pay
                    </Button>
                </Box>
            </Modal>
            <Snackbar
                open={openToast}
                autoHideDuration={5000}
                onClose={handleCloseToast}
            >
                <Alert
                    onClose={handleClose}
                    severity={message?.includes("Successful") ? 'success' : 'error'}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                {message}
                </Alert>
            </Snackbar>
        </>
    );
};
