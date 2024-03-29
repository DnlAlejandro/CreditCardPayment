import { Alert, Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useMemo, useState } from "react";
import { SummaryPage } from "../pages/";
import { useDispatch, useSelector } from "react-redux";
import { startSaving } from "../../store/payment/thunks";
import dayjs from "dayjs";

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

export const ModalPaymentCC = ({ handleClose, handleOpen, productInfo }) => {

    const [openSubModal, setOpenSubModal] = useState(false);
    const handleOpenSubModal = () => {
        setOpenSubModal(true);
    };

    const handleCloseSubModal = () => {
        setOpenSubModal(false);
    };

    const [cardType, setCardType] = useState(null);
    const dispatch = useDispatch();

    const { status: statusPay } = useSelector((state) => state.payment);
    const isCheckingPay = useMemo(() => statusPay === "checking", [statusPay]);

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const watchFields = watch();

    const watchNumberCC = watch("creditCard");

    const formKey = `formData-${productInfo.id}`;

    useEffect(() => {
        const savedData = localStorage.getItem(formKey);
        if (savedData) {
            const formData = JSON.parse(savedData);
            Object.keys(formData).forEach(key => {
                const value = formData[key];
                if (key === 'dateExpiry') {
                    setValue(key, dayjs(value));
                } else {
                    setValue(key, value);
                }
            });
        }
    }, [formKey, setValue]);

    useEffect(() => {
        const watchFields = watch();
        localStorage.setItem(formKey, JSON.stringify(watchFields));
    }, [watch(), formKey]);

    useEffect(() => {
        if (watchNumberCC?.startsWith("4")) {
            setCardType("visa");
        } else if (watchNumberCC?.startsWith("5")) {
            setCardType("mastercard");
        } else {
            setCardType(null);
        }
    }, [watchNumberCC]);

    const submitCcData = (data, productInfo) => {
        data.dateExpiry = data.dateExpiry.format("MM/YYYY");
        const { price, title, id } = productInfo;
        const { creditCard, cvc, dateExpiry, nameOnCard, adress } = data;

        dispatch(
            startSaving({ price, title, id, creditCard, cvc, dateExpiry, nameOnCard, adress })
        )
            .then(() => {
                handleClose();
                handleOpenSubModal();
            })
            .catch((error) => {
                console.error("Payment error:", error);
            });
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
                    >
                        Pay with your credit card
                    </Typography>
                    <Typography id="modal-modal-description">
                        We accept only Master Card and Visa
                    </Typography>
                    <form
                        onSubmit={handleSubmit((data) => {
                            submitCcData(data, productInfo);
                        })}
                    >
                        <Grid container>
                            <Grid item xs={12} sx={{ mt: 1 }}>
                                {cardType === "mastercard" && (
                                    <img
                                        src="https://brandemia.org/sites/default/files/sites/default/files/mastercard_pentagram_press-3.jpg"
                                        alt="mastercard"
                                        width="45px"
                                        height="30px"
                                    />
                                )}
                                {cardType === "visa" && (
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png"
                                        alt="visa"
                                        width="45px"
                                        height="30px"
                                    />
                                )}
                                <TextField
                                    {...register("creditCard", {
                                        required: "Credit card is required",
                                        minLength: {
                                            value: 16,
                                            message:
                                                "Credit card must have 16 digits",
                                        },
                                        maxLength: {
                                            value: 16,
                                            message:
                                                "Credit card must have 16 digits",
                                        },
                                        validate: {
                                            startsWith4Or5: (value) =>
                                                value.startsWith("4") ||
                                                value.startsWith("5")
                                                    ? true
                                                    : "Credit card must be Visa or Mastercard",
                                        },
                                    })}
                                    label="Credit card number"
                                    type="number"
                                    placeholder="5234 5678 9012 3456"
                                    fullWidth
                                />
                                {errors.creditCard && (
                                    <Alert sx={{ mt: 1 }} severity="error">
                                        {errors.creditCard.message}
                                    </Alert>
                                )}
                            </Grid>
                            <Grid
                                container
                                display="flex"
                                justifyContent={"space-between"}
                            >
                                <Grid item xs={5.5} sx={{ mt: 1 }}>
                                    <TextField
                                        {...register("cvc", {
                                            required: "CVC is required",
                                            minLength: {
                                                value: 3,
                                                message:
                                                    "CVC must have 3 digits",
                                            },
                                            maxLength: {
                                                value: 3,
                                                message:
                                                    "CVC must have 3 digits",
                                            },
                                        })}
                                        label="CVC"
                                        type="number"
                                        placeholder="123"
                                        fullWidth
                                    />
                                    {errors.cvc && (
                                        <Alert sx={{ mt: 1 }} severity="error">
                                            {errors.cvc.message}
                                        </Alert>
                                    )}
                                </Grid>
                                <Grid item xs={5.5} sx={{ mt: 1 }}>
                                    <Controller
                                        name="dateExpiry"
                                        control={control}
                                        defaultValue={null}
                                        rules={{
                                            required: "Date expiry is required",
                                        }}
                                        render={({ field }) => (
                                            <LocalizationProvider
                                                dateAdapter={AdapterDayjs}
                                            >
                                                <DatePicker
                                                    views={["year", "month"]}
                                                    label="Expiry date"
                                                    disablePast={true}
                                                    {...field}
                                                    slotProps={{
                                                        textField: {
                                                            fullWidth: true,
                                                        },
                                                    }}
                                                />
                                            </LocalizationProvider>
                                        )}
                                    />
                                    {errors.dateExpiry && (
                                        <Alert sx={{ mt: 1 }} severity="error">
                                            {errors.dateExpiry.message}
                                        </Alert>
                                    )}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 1 }}>
                                <TextField
                                    {...register("nameOnCard", {
                                        required: "name is required",
                                    })}
                                    label="Name on card"
                                    type="text"
                                    placeholder="Joe Rogan"
                                    fullWidth
                                />
                                {errors.nameOnCard && (
                                    <Alert sx={{ mt: 1 }} severity="error">
                                        {errors.nameOnCard.message}
                                    </Alert>
                                )}
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 1 }}>
                                <TextField
                                    {...register("adress", {
                                        required: "adress is required",
                                    })}
                                    label="Adress"
                                    type="text"
                                    placeholder="4332 DRESDEN ST COLUMBUS OH"
                                    fullWidth
                                />
                                {errors.adress && (
                                    <Alert sx={{ mt: 1 }} severity="error">
                                        {errors.adress.message}
                                    </Alert>
                                )}
                            </Grid>
                        </Grid>

                        <Button
                            variant="contained"
                            type="submit"
                            size="small"
                            disabled={isCheckingPay}
                            sx={{
                                mt: 1,
                                width: "100%",
                                display: "flex",
                                justifySelf: "center",
                            }}
                        >
                            Confirm
                        </Button>
                    </form>
                </Box>
            </Modal>
            <SummaryPage
                handleOpen={openSubModal}
                handleClose={handleCloseSubModal}
            />
        </>
    );
};
