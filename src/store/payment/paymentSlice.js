import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        status: "not-paying", //not paying - paying - checking
        price: null,
        title: null,
        id: null,
        creditCard: null,
        cvc: null,
        dateExpiry: null,
        nameOnCard: null,
        adress: null,
        message: null,
    },
    reducers: {
        checkingPayment: (state) => {
            state.status = "checking";
        },

        savingItem: (state, { payload }) => {
            state.status = "paying";
            state.price = payload.price;
            state.title = payload.title;
            state.id = payload.id;
            state.creditCard = payload.creditCard;
            state.cvc = payload.cvc;
            state.dateExpiry = payload.dateExpiry;
            state.nameOnCard = payload.nameOnCard;
            state.adress = payload.adress;
            state.message = null;
        },

        finishingPay: (state, { payload }) => {
            state.status = "not-paying";
            state.price = null;
            state.title = null;
            state.id = null;
            state.creditCard = null;
            state.cvc = null;
            state.dateExpiry = null;
            state.nameOnCard = null;
            state.adress = null;
            state.message = payload.message;
        },
    },
});

export const { savingItem, checkingPayment, finishingPay } = paymentSlice.actions;
