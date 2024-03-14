import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "react-hook-form";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitLoginData = (data) => {
        console.log(data)
    }

    return (
        <AuthLayout title="Login">
            <form
                onSubmit={handleSubmit((data) => {
                    submitLoginData(data)
                })}
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            {...register("email", {
                                required: 'Email is required',
                            })}
                            label="Email"
                            type="email"
                            placeholder="email@mail.com"
                            fullWidth
                        />
                        {errors.email?.type === "required" && (
                            <>
                                <Alert sx={{ mt: 1 }} severity="error">
                                    Email is required
                                </Alert>
                            </>
                        )}
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            {...register("password", {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password should have at least 6 characters",
                                },
                            })}
                            label="Password"
                            type="password"
                            fullWidth
                        />
                        {errors.password && (
                            <span>
                                <Alert sx={{ mt: 1 }} severity="error">
                                    {errors.password?.message}
                                </Alert>
                            </span>
                        )}
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                // disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                //disabled={isAuthenticating}
                                variant="contained"
                                fullWidth
                                onClick={()=> {console.log('a')}}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link
                            component={RouterLink}
                            color="inherit"
                            to="/auth/register"
                        >
                            Create an account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
