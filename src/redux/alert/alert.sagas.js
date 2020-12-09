import { takeLatest, put, all, call } from "redux-saga/effects";

import AlertActionTypes from "./alert.types";

import {
    alertNotificationError,
    alertNotificationMessage,
    alertNotificationSuccess,
} from "./alert.actions";

export function* alertNotifyMessage({ payload: { message } }) {
    try {
        console.log('sideEffect: ' + message);
        
        yield put(alertNotificationMessage(message));
    } catch (error) {
        console.log(error);
    }
}

export function* alertNotifySuccess({ payload: { success } }) {
    try {
        console.log('sideEffect: ' + success);
        
        yield put(alertNotificationSuccess(res.data.message));
    } catch (error) {
        console.log(error);
    }
}

export function* alertNotifyError({ payload: { error }}) {
    try {
        console.log('sideEffect: ' + error);

        yield put(alertNotificationError(error));
    } catch(error) {
        console.log(error);
    }
}

export function* watchAlertNotifications({ payload: { message, alertType, timeout = 4000 }}) {
    try {
        console.log('sideEffect: ' + message);
        const id = uuid.v4();
    
        if (alertType === 'error') {
            yield put(alertNotificationError(message));            
        } else if (alertType === 'message') {
            yield put(alertNotificationMessage(message));
        } else {
            yield put(alertNotificationSuccess(message));
        }
        
        // dispatch({ type: AlertActionTypes.SET_ALERT_NOTIFICATION, payload: { message, alertType, id }});

        // const removeNotif = () => {
        //     return yield put(removeAlertNotification());
        // }        

        // setTimeout(() => { 
        //     removeNotif
        // }, timeout);
    
    } catch(error) {
        console.log(error);
    }
}

export function* onAlertNotifyMessage() {
    yield takeLatest(AlertActionTypes.ALERT_NOTIFICATION_MESSAGE, alertNotifyMessage);
}

export function* onAlertNotifySuccess() {
    yield takeLatest(AlertActionTypes.ALERT_NOTIFICATION_SUCCESS, alertNotifySuccess);
}

export function* onAlertNotifyError() {
    yield takeLatest(AlertActionTypes.ALERT_NOTIFICATION_ERROR, alertNotifyError);
}

export function* onWatchAlertNotifications() {
    yield takeLatest(AlertActionTypes.WATCH_ALERT_NOTIFICATIONS, watchAlertNotifications);
}

export function* alertSagas() {
    yield all([
        call(onAlertNotifyMessage),
        call(onAlertNotifySuccess),
        call(onAlertNotifyError),
        call(onWatchAlertNotifications),
    ]);
}
