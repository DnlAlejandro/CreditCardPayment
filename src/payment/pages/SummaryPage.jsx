import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

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

const submitCcData = (data) => {
    data.dateExpiry = data.dateExpiry.format("MM/YYYY");
    console.log(data);
};

export const SummaryPage = ({handleClose, handleOpen}) => {
    return (
        <Modal
            open={handleOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Pay with your credit card
                </Typography>
                <Typography id="modal-modal-description">
                    We accept only Master Card and Visa
                </Typography>
            </Box>
        </Modal>
    )
}
