import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardProduct } from '../../../src/payment/components/CardProduct';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { authenticatedState } from '../../fixtures/authFixtures';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store/auth/authSlice';
import { paymentSlice } from '../../../src/store/payment/paymentSlice';


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
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

describe('CardProduct Component', () => {
    const productInfo = {
        title: 'Test Product',
        description: 'This is a test product',
        price: 100,
        image: 'test-image.jpg'
    };

    it('should display product information', () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <CardProduct productInfo={productInfo} />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('This is a test product')).toBeInTheDocument();
        expect(screen.getByRole('img', { alt: 'Test Product' })).toHaveAttribute('alt', 'Test Product');
    });

    it('should open modal on button click', () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <CardProduct productInfo={productInfo} />
                </MemoryRouter>
            </Provider>
        );

        const button = screen.getByText('Pay with credit card');
        fireEvent.click(button);

        expect(screen.getByText('Pay with credit card')).toBeInTheDocument();
    });
});
