import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { demoUser, initialState } from "../../fixtures/authFixtures";

describe("Test in authSlice", () => {
    test('should return initialState and call "auth"', () => {
        expect(authSlice.name).toBe("auth");
        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test("should make authentication", () => {
        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: "authenticated",
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            errorMessage: null,
        });
    });

    test("should make logout and show error message", () => {
        const errorMessage = "Credentials are not valid";
        const state = authSlice.reducer(initialState, logout({ errorMessage }));
        expect(state).toEqual({
            status: "not-authenticated",
            uid: null,
            email: null,
            displayName: null,
            errorMessage: errorMessage,
        });
    });

    test("should change status to checking", () => {
        const state = authSlice.reducer(initialState, checkingCredentials());
        expect(state.status).toEqual(("checking"));
    });
});