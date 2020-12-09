import CustomerActionTypes from "./customer.types";

export const forgotPasswordStart = (email) => ({
    type: CustomerActionTypes.FORGOT_PASSWORD_START,
    payload: email,
});

export const forgotPasswordSuccess = (message) => ({
    type: CustomerActionTypes.FORGOT_PASSWORD_SUCCESS,
    payload: message,
});

export const resetPasswordStart = (userCredentials) => ({
    type: CustomerActionTypes.RESET_PASSWORD_START,
    payload: userCredentials,
});

export const resetPasswordSuccess = (message) => ({
    type: CustomerActionTypes.RESET_PASSWORD_SUCCESS,
    payload: message,
});

export const signUpStart = (clientCredentials) => ({
    type: CustomerActionTypes.SIGN_UP_START,
    payload: clientCredentials,
});

export const signUpSuccess = ({ client, additionalData }) => ({
    type: CustomerActionTypes.SIGN_UP_SUCCESS,
    payload: { client, additionalData },
});

export const signUpFailure = (error) => ({
    type: CustomerActionTypes.SIGN_UP_FAILURE,
    payload: error,
});
