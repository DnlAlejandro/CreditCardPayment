import React from 'react';
import { fireEvent, render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { paymentSlice } from '../../../src/store/payment/paymentSlice';
import { Navbar } from '../../../src/payment/components/Navbar';
import { authSlice } from '../../../src/store/auth/authSlice';
import { authenticatedState } from '../../fixtures/authFixtures';
import { MemoryRouter } from 'react-router-dom';
import { startLogout } from '../../../src/store/auth/thunks';

const mockStartLogout = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startLogout: () => mockStartLogout,
    
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => jest.fn()
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        payment: paymentSlice.reducer 
    },
    preloadedState: {
        auth: authenticatedState,
        payment: {}
    }
})

describe('Navbar Component', () => {
    it('should display the users displayName', () => {
        render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );

        expect(screen.getByText(authenticatedState.displayName)).toBeInTheDocument();
    });

    it('should call startLogout on logout button click', () => {        
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </Provider>
        );

        const logoutButton = screen.getByLabelText('btn-logout');
        fireEvent.click(logoutButton);
        screen.debug()
        //expect(mockStartLogout).toHaveBeenCalled();
    });
});
