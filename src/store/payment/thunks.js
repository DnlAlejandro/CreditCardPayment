import { checkingPayment, finishingPay, savingItem } from "./paymentSlice";

export const checkingPaymentData = () => {
    return async (dispatch) => {
        dispatch(checkingPayment());
    };
};

export const startSaving = ({ price, title, id, creditCard, cvc, dateExpiry, nameOnCard, adress }) => {
    return async (dispatch) => {
        dispatch(checkingPayment());
        dispatch(savingItem({price, title, id, creditCard, cvc, dateExpiry, nameOnCard, adress}));
    };
};
export const startFinishingPay = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            dispatch(checkingPayment());
            setTimeout(() => {
                const aleatoryResponse = Math.floor(Math.random() * 6) + 1;
                let message;
                if (aleatoryResponse >= 3) {
                    message = 'Successful payment';
                    dispatch(finishingPay({ message }));
                    resolve(message); 
                } else {
                    message = 'Error payment, try again later...';
                    dispatch(finishingPay({ message }));
                    resolve(message);
                }
            }, 2000);
        });
    };
};
