import { loginWithEmailAndPassword, logoutFirebase, registerUserEmailWithPassword, signInWithgoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}; 

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithgoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
};
export const startEmailAndPasswordLogin = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailAndPassword({email, password})
        if(!result.ok) return dispatch(logout(result));
        dispatch(login(result));
    }
};
export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerUserEmailWithPassword({email, password, displayName});
        if(!result.ok) return dispatch(logout(result));
        dispatch(login(result));
    }
}; 

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( logout() );
    }
}