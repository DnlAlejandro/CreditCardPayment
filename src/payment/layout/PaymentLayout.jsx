import { Box, Grid, Toolbar } from '@mui/material'
import { Navbar } from '../components/Navbar'
import { CardProduct } from '../components/CardProduct'

export const PaymentLayout = ({children}) => {
    return (
        <Box
            sx={{ display: "flex" }}
        >
            <Navbar/>
            <Box component="main" sx={{ flexGrow: 2, p: 5 }}>
                <Toolbar />
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <CardProduct></CardProduct>
                </Grid>

                {children}

            </Box>

        </Box>
    )
}
