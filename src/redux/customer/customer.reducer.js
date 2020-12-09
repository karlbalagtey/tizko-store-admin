import CustomerActionTypes from "./customer.types";

const INITIAL_STATE = {
    currentUser: null,
    isSubmitting: false,
    message: undefined
};

const customerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CustomerActionTypes.FORGOT_PASSWORD_START:
            return {
                ...state,
                isSubmitting: true
            };
        case CustomerActionTypes.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                message: action.payload,
                isSubmitting: false
            };
        case CustomerActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                success: action.payload,
                message: null,
                error: null,
                isSubmitting: false,
            }

        case CustomerActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isSubmitting: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default customerReducer;
