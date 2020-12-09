import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isSubmitting: false,
    isAuthenticated: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.CHECK_USER_SESSION:
            return {
                ...state,
                isSubmitting: true
            };
        case UserActionTypes.NO_USER_FOUND:
            return {
                ...state,
                isSubmitting: false,
                currentUser: null,
            };
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...state,
                isSubmitting: true
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isSubmitting: false,
                isAuthenticated: true,
            };
        case UserActionTypes.SIGN_OUT_START:
            return {
                ...state,
                isSubmitting: true
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                isSubmitting: false,
                isAuthenticated: false,
            };
        case UserActionTypes.FORGOT_PASSWORD_START:
            return {
                ...state,
                isSubmitting: true
            };
        case UserActionTypes.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                isSubmitting: false
            };
        case UserActionTypes.RESET_PASSWORD_START:
            return {
                ...state,
                isSubmitting: true
            };
        case UserActionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isSubmitting: false
            };
        case UserActionTypes.VALIDATE_TOKEN_START:
            return {
                ...state,
                isSubmitting: true
            };
        case UserActionTypes.VALIDATE_TOKEN_SUCCESS:
            return {
                ...state,
                isSubmitting: false,
            };
        case UserActionTypes.VALIDATE_TOKEN_FAILURE:
            return {
                ...state,
                isSubmitting: false,
            };
        case UserActionTypes.UPDATE_USER_PROFILE_START:
            return {
                ...state,
                isSubmitting: true
            };
        case UserActionTypes.UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isSubmitting: false,
            };
        case UserActionTypes.UPDATE_USER_PROFILE_FAILURE:
            return {
                ...state,
                isSubmitting: false,
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isSubmitting: false,
            };
        default:
            return state;
    }
};

export default userReducer;
