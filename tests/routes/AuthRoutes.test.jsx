// import { render, screen, waitFor } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { AuthRoutes } from '../../src/auth/routes/AuthRoutes';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from '../../src/store/auth/authSlice';
// import { notAuthenticatedState } from '../fixtures/authFixtures';
// import '@testing-library/jest-dom';

// jest.mock('../../src/hooks/useCheckAuth', () => ({
//     useCheckAuth: () => ({ status: 'not-authenticated' }),
// }));

// const store = configureStore({
//     reducer: {
//         auth: authSlice.reducer
//     },
//     preloadedState: {
//         auth: notAuthenticatedState
//     }
// })

// describe('AuthRoutes', () => {
//     test('should redirect to the login page by default', async() => {

//         render(
//             <Provider store={store}>
//                 <MemoryRouter>
//                     <AuthRoutes />
//                 </MemoryRouter>
//             </Provider>
//         );
//         //await waitFor(() => {
//             expect(screen.getByLabelText("login-btn")).toBeInTheDocument();;
//         //});
//         screen.debug();
//         //expect(screen.getByText("Login")).toBeInTheDocument();
//     });

    // test('should display the login page on the /auth/login route', () => {
    //     render(
    //         <MemoryRouter initialEntries={['/auth/login']}>
    //             <AuthRoutes />
    //         </MemoryRouter>
    //     );

    //     expect(screen.getByText(/login page/i)).toBeInTheDocument();
    // });

    // test('should display the register page on the /auth/register route', () => {
    //     render(
    //         <MemoryRouter initialEntries={['/auth/register']}>
    //             <AuthRoutes />
    //         </MemoryRouter>
    //     );

    //     expect(screen.getByText(/register page/i)).toBeInTheDocument();
    // });
//});
describe('first', () => { 
    test('should first', () => { 
        
    })
})