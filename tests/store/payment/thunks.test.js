import { checkingPayment, finishingPay, savingItem } from "../../../src/store/payment/paymentSlice";
import { checkingPaymentData, startSaving, startFinishingPay } from "../../../src/store/payment/thunks";

describe("Test in payment thunks", () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        dispatch.mockClear();
        getState.mockClear();
    });

    test("checkingPaymentData should call checkingPayment", async () => {
        await checkingPaymentData()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingPayment());
    });

    test("startSaving should call checkingPayment and savingItem with the provided data", async () => {
        const paymentData = {
            price: 100,
            title: "Test Product",
            id: "prod1",
            creditCard: "1234567890123456",
            cvc: "123",
            dateExpiry: "12/34",
            nameOnCard: "Test User",
            adress: "Test Address"
        };

        await startSaving(paymentData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingPayment());
        expect(dispatch).toHaveBeenCalledWith(savingItem(paymentData));
    });

    test("startFinishingPay should call checkingPayment and finishingPay with a success message", async () => {

        jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
        const promise = startFinishingPay()(dispatch);
        
        await expect(promise).resolves.toEqual('Successful payment');
        expect(dispatch).toHaveBeenCalledWith(checkingPayment());
        expect(dispatch).toHaveBeenCalledWith(finishingPay({ message: 'Successful payment' }));

        global.Math.random.mockRestore();
    });

    test("startFinishingPay should call checkingPayment and finishingPay with an error message", async () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
        const promise = startFinishingPay()(dispatch);
        
        await expect(promise).resolves.toEqual('Error payment, try again later...');
        expect(dispatch).toHaveBeenCalledWith(checkingPayment());
        expect(dispatch).toHaveBeenCalledWith(finishingPay({ message: 'Error payment, try again later...' }));

        global.Math.random.mockRestore();
    });
});
