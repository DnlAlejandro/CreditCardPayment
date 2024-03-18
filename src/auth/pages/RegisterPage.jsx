import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks";

export const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {status, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const submitRegisterData = (data) => {
        data.displayName = data.fullname;
        delete data.fullname;
        console.log(data)
        dispatch(startCreatingUserWithEmailAndPassword(data));
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
                                minLength: {
                                    value: 3,
                                    message:
                                        "Fullname should have at least 3 characters",
                                },
                            })}
                            aria-invalid={errors.fullname ? "true" : "false"}
                            label="Fullname"
                            type="fullname"
                            placeholder="Demetrius Jhonson"
                            fullWidth
                        />
                        {errors.fullname && (
                            <span>
                                <Alert sx={{ mt: 1 }} severity="error">
                                    {errors.fullname?.message}
                                </Alert>
                            </span>
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
                        {errors.email && (
                            <span>
                                <Alert sx={{ mt: 1 }} severity="error">
                                    {errors.email?.message}
                                </Alert>
                            </span>
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
                    <Grid item xs={12} sx={{ mt: 2, display: !!errorMessage ? "" : 'none'}}>
                        <span>
                            <Alert sx={{ mt: 1 }} severity="error">
                                {errorMessage}
                            </Alert>
                        </span>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                aria-label="btn-register"
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
