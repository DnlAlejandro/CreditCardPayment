import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { RegisterPage } from '../../../src/auth/pages/RegisterPage';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from "../../../src/store/auth/authSlice";
import '@testing-library/jest-dom';


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    }
});

describe('RegisterPage', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterPage />
                </MemoryRouter>
            </Provider>
        );
    });

    test('should render correctly', () => {

        expect(screen.getByLabelText("btn-register")).toBeInTheDocument();
        expect(screen.getByLabelText("Fullname")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    // test('should show alerts when fields are empty', async() => {
        
    //     await act(async () => {
    //         fireEvent.click(screen.getByLabelText('btn-register'));
    //     })
    //     expect(container.innerHTML).toMatch("Email is required")

        
    //     //expect(screen.getByText(/fullname is required/i)).toBeInTheDocument();
    //     //expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    //     //expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    // });
});
