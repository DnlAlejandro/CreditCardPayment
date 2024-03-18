import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "react-hook-form";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startEmailAndPasswordLogin, startGoogleSignIn } from "../../store/auth/thunks";
import { useMemo } from "react";

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {status, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const isAuthenticating = useMemo(() => status === 'checking', [status]);
    
    const submitLoginData = (data) => {
        dispatch(checkingAuthentication());
        const {email, password} = data;
        dispatch(startEmailAndPasswordLogin({email, password}));
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    };

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
                            name="email"
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
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password should have at least 6 characters",
                                },
                            })}
                            label="Password"
                            name="password"
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
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                aria-label="login-btn"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                variant="contained"
                                fullWidth
                                aria-label="google-btn"
                                name="login"
                                onClick={onGoogleSignIn}
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
