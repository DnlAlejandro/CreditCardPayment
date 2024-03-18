import { loginWithEmailAndPassword, logoutFirebase, signInWithgoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startEmailAndPasswordLogin, startGoogleSignIn, startLogout } from "../../../src/store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";
jest.mock('../../../src/firebase/providers')

describe("Test in thunks(auth)", () => {
    const dispatch = jest.fn();
    test("should call checkingcredentials", async() => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test("startGoogleSignIn should call checkingcredentials and login successful", async() => {
        const loginData = {ok: true, ...demoUser};
        await signInWithgoogle.mockResolvedValue(loginData);
        //thunk
        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test("startGoogleSignIn should call checkingcredentials and login failed", async() => {
        const loginData = {ok: false, errorMessage: 'Google error in login'};
        await signInWithgoogle.mockResolvedValue(loginData);
        //thunk
        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test("startEmailAndPasswordLogin should call checkingcredentials and login successful", async() => {
        const loginData = {ok: true, ...demoUser};
        const formData = {email: demoUser.email, password: '123456'};
        await loginWithEmailAndPassword.mockResolvedValue(loginData);
        //thunk
        await startEmailAndPasswordLogin(formData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test("startEmailAndPasswordLogin should call checkingcredentials and login failed", async() => {
        const error = {errorMessage: 'Invalid credentials', errorCode: 203};
        const loginData = {ok: false, ...error};
        const formData = {email: demoUser.email, password: '123456'};
        await loginWithEmailAndPassword.mockResolvedValue(loginData);
        //thunk
        await startEmailAndPasswordLogin(formData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData));
    });

    test("startLogout should call logoutFirebase and logout", async() => {
        await startLogout()(dispatch);
        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(logout());

    });
});
