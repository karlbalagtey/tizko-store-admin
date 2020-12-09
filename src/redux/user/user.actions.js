import UserActionTypes from "./user.types";

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
});

export const forgotPasswordStart = (email) => ({
    type: UserActionTypes.FORGOT_PASSWORD_START,
    payload: email,
});

export const forgotPasswordSuccess = (message) => ({
    type: UserActionTypes.FORGOT_PASSWORD_SUCCESS,
    payload: message,
});

export const resetPasswordStart = (userCredentials) => ({
    type: UserActionTypes.RESET_PASSWORD_START,
    payload: userCredentials,
});

export const resetPasswordSuccess = (message) => ({
    type: UserActionTypes.RESET_PASSWORD_SUCCESS,
    payload: message,
});

export const validateResetTokenStart = (token) => ({
    type: UserActionTypes.VALIDATE_RESET_TOKEN_START,
    payload: token
});

export const validateResetTokenSuccess = (success) => ({
    type: UserActionTypes.VALIDATE_RESET_TOKEN_SUCCESS,
    payload: success
});

export const validateResetTokenFailure = (error) => ({
    type: UserActionTypes.VALIDATE_RESET_TOKEN_ERROR,
    payload: error
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const noUserFound = (message) => ({
    type: UserActionTypes.NO_USER_FOUND,
    payload: message,
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});

export const signUpClientStart = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_CLIENT_START,
    payload: userCredentials,
});

export const signUpClientSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_CLIENT_SUCCESS,
    payload: { user, additionalData },
});

export const signUpClientFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_CLIENT_FAILURE,
    payload: error,
});

export const updateUserProfileStart = (userCredentials) => ({
    type: UserActionTypes.UPDATE_USER_PROFILE_START,
    payload: userCredentials
});

export const updateUserProfileSuccess = (success) => ({
    type: UserActionTypes.UPDATE_USER_PROFILE_SUCCESS,
    payload: success,
});

export const updateUserProfileFailure = (error) => ({
    type: UserActionTypes.UPDATE_USER_PROFILE_FAILURE,
    payload: error,
});

