import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export const CardProduct = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://i.ebayimg.com/images/g/hnYAAOSwGK9j64j~/s-l1600.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Pay with credit card</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};
