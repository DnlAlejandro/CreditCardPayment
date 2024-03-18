export const initialState = {
    status: "checking",
    uid: null,
    email: null,
    displayName: null,
    errorMessage: null,
};

export const authenticatedState = {
    status: "authenticated",
    uid: "123ABC",
    email: "mail@mail.com",
    displayName: "Demo user",
    errorMessage: null,
};

export const notAuthenticatedState = {
    status: "not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    errorMessage: null,
};

export const demoUser = {
    uid: "123ABC",
    email: "mail@mail.com",
    displayName: "Demo user",
};
