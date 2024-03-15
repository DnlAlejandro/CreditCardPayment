import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        payment: Pay
    },
})