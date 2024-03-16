import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithgoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        
        const { displayName, email, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            uid
        }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            error: errorMessage
        }
    }
};
export const loginWithEmailAndPassword = async ({email, password}) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { displayName, uid } = result.user;

        return {
            ok: true,
            displayName,
            uid
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
};

export const registerUserEmailWithPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid} = resp.user;
        await updateProfile(FirebaseAuth.currentUser, {displayName});
        return {
            ok: true,
            displayName,
            email,
            uid
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
};

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
};
