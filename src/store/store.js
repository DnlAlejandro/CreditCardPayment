import { configureStore } from "@reduxjs/toolkit";
import { paymentSlice } from "./payment/paymentSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        payment: paymentSlice.reducer,
    },
})