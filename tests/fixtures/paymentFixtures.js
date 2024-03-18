export const initialState = {
    status: "not-paying",
    price: null,
    title: null,
    id: null,
    creditCard: null,
    cvc: null,
    dateExpiry: null,
    nameOnCard: null,
    adress: null,
    message: null,
};

export const savingState = {
    status: "paying",
    price: 4.50,
    title: 'Backpack',
    id: 4,
    creditCard: '4321432143214321',
    cvc: 123,
    dateExpiry: '04/27',
    nameOnCard: 'Daniel Diaz',
    adress: '3800 CARMAN DR LAKE OSWEGO',
    message: null,
};

export const finishingPayState = {
    status: "not-paying",
    price: null,
    title: null,
    id: null,
    creditCard: null,
    cvc: null,
    dateExpiry: null,
    nameOnCard: null,
    adress: null,
    message: null,
};

export const demoItem = {
    id: "1",
    price: 4.50,
    title: 'Backpack',
    id: 4,
    creditCard: '4321432143214321',
    cvc: 123,
    dateExpiry: '04/27',
    nameOnCard: 'Daniel Diaz',
    adress: '3800 CARMAN DR LAKE OSWEGO',
};