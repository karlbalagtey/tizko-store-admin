import AlertActionTypes from "./alert.types";

export const alertNotificationMessage = (message, redirect, id) => ({
    type: AlertActionTypes.ALERT_NOTIFICATION_MESSAGE,
    payload: message,
    redirect: redirect,
    id: id,
});

export const alertNotificationSuccess = (success, redirect, id) => ({
    type: AlertActionTypes.ALERT_NOTIFICATION_SUCCESS,
    payload: success,
    redirect: redirect,
    id: id,
});

export const alertNotificationError = (error, redirect, id) => ({
    type: AlertActionTypes.ALERT_NOTIFICATION_ERROR,
    payload: error,
    redirect: redirect,
    id: id,
});

export const setAlertNotification = (message, alertType, timeout) => ({
    type: AlertActionTypes.SET_ALERT_NOTIFICATIONS,
    payload: message,
    alertType: alertType,
    timeout: timeout,
});

export const removeAlertNotification = (id) => ({
    type: AlertActionTypes.REMOVE_ALERT_NOTIFICATION,
    id: id,
});