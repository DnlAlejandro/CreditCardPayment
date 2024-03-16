import { createSlice } from '@reduxjs/toolkit';

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});

export const { increment } = paymentSlice.actions;