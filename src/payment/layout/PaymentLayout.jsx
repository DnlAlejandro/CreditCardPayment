import { Box, Grid, Toolbar, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { CardProduct } from "../components/CardProduct";
import { getProducts } from "../helpers/loadInfoProduct";
import { useEffect, useState } from "react";

export const PaymentLayout = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getProducts();
                console.log(productsData);
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ display: "flex" }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 2, p: 3 }}>
                <Toolbar />
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {products.map((product) => (
                        <CardProduct key={product.id} productInfo={product}/>
                    ))}
                </Grid>

                {children}
            </Box>
        </Box>
    );
};
