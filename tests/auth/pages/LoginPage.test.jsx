import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { notAuthenticatedState } from "../../fixtures/authFixtures";
import { authSlice } from "../../../src/store/auth/authSlice";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
    checkingAuthentication: () => jest.fn(),
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startEmailAndPasswordLogin: ({ email, password }) => {
        return () => mockStartLoginWithEmailPassword({ email, password });
    },
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
    preloadedState: {
        auth: notAuthenticatedState,
    },
});

describe("Tests in LoginPage", () => {
    beforeEach(() => jest.clearAllMocks());

    test("should show component correctly", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
    });

    test("google button should call startGoogleSignIn", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText("google-btn");
        fireEvent.click(googleBtn);
        expect(mockStartGoogleSignIn).toHaveBeenCalled();
    });

    test('submit should call startEmailAndPasswordLogin', () => {

        const email = 'test@example.com';
        const password = 'password123';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: email } });
        fireEvent.change(screen.getByLabelText('Password'), { target: { value: password } });
    });
});
