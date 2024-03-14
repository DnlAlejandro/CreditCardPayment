import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "react-hook-form";

export const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitRegisterData = (data) => {
        console.log(data);
    };

    return (
        <AuthLayout title="Create account">
            <form
                onSubmit={handleSubmit((data) => {
                    submitRegisterData(data);
                })}
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            {...register("fullname", {
                                required: "Fullname is required",
                            })}
                            aria-invalid={errors.fullname ? "true" : "false"}
                            label="Fullname"
                            type="fullname"
                            placeholder="Demetrius Jhonson"
                            fullWidth
                        />
                        {errors.fullname?.type === "required" && (
                            <>
                                <Alert sx={{ mt: 1 }} severity="error">
                                    Fullname is required
                                </Alert>
                            </>
                        )}
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            {...register("email", {
                                required: "Email is required",
                            })}
                            aria-invalid={errors.email ? "true" : "false"}
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
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password should have at least 6 characters",
                                },
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
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
                        <Grid item xs={12}>
                            <Button
                                //disabled={isCheckingAuthentication}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Create account
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>
                            Do you already have account?
                        </Typography>
                        <Link
                            component={RouterLink}
                            color="inherit"
                            to="/auth/login"
                        >
                            Log in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
