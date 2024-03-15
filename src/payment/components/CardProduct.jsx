import { Button, Card, CardActions, CardContent, CardMedia, Modal, Typography} from "@mui/material";
import { ModalPaymentCC } from "./ModalPaymentCC";
import { useState } from "react";

export const CardProduct = ({ productInfo }) => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    borderRadius: 2,
                    maxWidth: 345,
                    height: 450,
                    marginBottom: 2,
                }}
            >
                <CardMedia
                    sx={{ height: 200 }}
                    image={productInfo.image}
                    title={productInfo.title}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            maxHeight: "70px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {productInfo.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            maxHeight: "60px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            textAlign: "justify",
                            marginBottom: 1,
                        }}
                    >
                        {productInfo.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 1,
                        }}
                    >
                        <span style={{ fontWeight: "bold" }}>Price: &nbsp;</span> $
                        {productInfo.price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        onClick={handleOpenModal}
                        size="small"
                    >
                        Pay with credit card
                    </Button>
                </CardActions>
            </Card>
            <ModalPaymentCC
                handleOpen={openModal}
                handleClose={handleCloseModal}
            />
        </>
    );
};
