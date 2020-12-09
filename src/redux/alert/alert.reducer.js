import AlertActionTypes from "./alert.types";

const INITIAL_STATE = {
    message: null,
    error: null,
    success: null,
    redirect: null,
    id: null,
    actionType: null,
};

const alertReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AlertActionTypes.ALERT_NOTIFICATION_MESSAGE:
            return {
                ...state,
                success: null,
                redirect: action.redirect,
                id: action.id,
                message: action.payload,
                error: null                
            };
        case AlertActionTypes.ALERT_NOTIFICATION_SUCCESS:
            return {
                ...state,
                success: action.payload,
                redirect: action.redirect,
                id: action.id,
                message: null,
                error: null
            };
        case AlertActionTypes.ALERT_NOTIFICATION_ERROR:
            return {
                ...state,
                error: action.payload,
                redirect: action.redirect,
                id: action.id,
                message: null,
                success: null
            };
        case AlertActionTypes.SET_ALERT_NOTIFICATION:
            return {
                ...state,
                message: action.payload,
                redirect: action.redirect,
                id: action.id,
                error: null,
                success: null,
                actionType: action.actionType,
            };
        case AlertActionTypes.REMOVE_ALERT_NOTIFICATION:
            return {
                ...state,
                error: null,
                redirect: null,
                id: action.id,
                message: null,
                success: null,
            };
        default:
            return state;
    }
};

export default alertReducer;
