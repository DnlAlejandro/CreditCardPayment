// import { renderHook } from '@testing-library/react-hooks';
// import { onAuthStateChanged } from "firebase/auth";
// import { Provider } from 'react-redux';
// import { useCheckAuth } from '../../src/hooks/useCheckAuth';
// import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from '../../src/store/auth/authSlice';

// jest.mock("../../src/firebase/config.js", () => ({
//     FirebaseAuth: {},
// }));
// const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
// const store = configureStore({ reducer: { auth: authSlice.reducer } });

// jest.mock("firebase/auth", () => ({
//     onAuthStateChanged: jest.fn(),
// }));


describe('useCheckAuth hook', () => {
    test('should first', () => { 
    
    })
    // it('should dispatch login action when user is authenticated', async () => {
    //     const user = { uid: '123', email: 'user@example.com', displayName: 'User' };
    //     onAuthStateChanged.mockImplementation((_, callback) => {
    //         callback(user);
    //     });

    //     const { result, waitForNextUpdate } = renderHook(() => useCheckAuth(), { wrapper });

    //     await waitForNextUpdate();

    //     expect(result.current.status).toBe('authenticated');
    // });

    // it('should dispatch logout action when user is not authenticated', async () => {
    //     onAuthStateChanged.mockImplementation((_, callback) => callback(null));

    //     const { result, waitForNextUpdate } = renderWithRedux(useCheckAuth);

    //     await waitForNextUpdate();

    //     expect(result.current.status).toBe('not-authenticated');
    // });
});