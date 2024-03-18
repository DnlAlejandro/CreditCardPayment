import { LogoutOutlined } from "@mui/icons-material";
import {
    AppBar,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

export const Navbar = () => {
    const dispatch = useDispatch();
    const { displayName } = useSelector((state) => state.auth);
    const matches = useMediaQuery("(max-width:400px)");

    const onLogout = () => {
        dispatch(startLogout());
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `100%` },
                ml: { sm: `100px` },
            }}
        >
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        variant="subtitle1"
                        sx={{ fontSize: matches ? "0.75rem" : "1rem" }}
                        >
                        {displayName}
                    </Typography>
                    {matches ? (
                        <IconButton color="inherit">
                            <CreditScoreIcon />{" "}
                        </IconButton>
                    ) : (
                        <Typography variant="h6" noWrap component="div">
                            PaymentCreditCardApp
                        </Typography>
                    )}

                        

                    <IconButton color="error" onClick={onLogout} aria-label="btn-logout">
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
