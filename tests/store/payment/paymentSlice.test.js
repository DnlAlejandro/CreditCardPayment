import { checkingPayment, finishingPay, paymentSlice, savingItem } from "../../../src/store/payment/paymentSlice";
import { demoItem, initialState } from "../../fixtures/paymentFixtures";

describe("Test in paymentSlice", () => {
    test('should return initialState and call "auth"', () => {
        expect(paymentSlice.name).toBe("payment");
        const state = paymentSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test("should make saving", () => {
        const state = paymentSlice.reducer(initialState, savingItem(demoItem));
        expect(state).toEqual({
            status: "paying",
            price: demoItem.price,
            title: demoItem.title,
            id: demoItem.id,
            creditCard: demoItem.creditCard,
            cvc: demoItem.cvc,
            dateExpiry: demoItem.dateExpiry,
            nameOnCard: demoItem.nameOnCard,
            adress: demoItem.adress,
            message: null,
        });
    });

    test("should make finishing payment", () => {
        const message = "Successful payment";
        const state = paymentSlice.reducer(initialState, finishingPay({ message }));
        expect(state).toEqual({
            status: "not-paying",
            price: null,
            title: null,
            id: null,
            creditCard: null,
            cvc: null,
            dateExpiry: null,
            nameOnCard: null,
            adress: null,
            message: message,
        });
    });

    test("should change status to checking", () => {
        const state = paymentSlice.reducer(initialState, checkingPayment());
        expect(state.status).toEqual(("checking"));
    });
});
