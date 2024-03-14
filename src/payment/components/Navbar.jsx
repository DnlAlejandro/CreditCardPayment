import { LogoutOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'

export const Navbar = () => {
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
                    <Typography variant="h6" noWrap component="div">
                        {" "}
                        PaymentCreditCardApp{" "}
                    </Typography>

                    <IconButton color="error" onClick={() => console.log('logout')}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}
