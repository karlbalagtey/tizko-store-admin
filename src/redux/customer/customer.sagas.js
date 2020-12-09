import { takeLatest, put, all, call } from "redux-saga/effects";

import CustomerActionTypes from "./customer.types";

import {
    signUpSuccess,
    signUpFailure,
    forgotPasswordSuccess,
} from "./customer.actions";

import {
    tizkoForgotPassword,
} from "../../api/tizko-api";

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { uid, user } = yield auth.createUser({
            displayName,
            email,
            password
        });

        const role = 'Client';

        yield auth.setCustomUserClaims(uid, { role });

        yield put(
            signUpSuccess({ user, additionalData: { firstName, lastName } })
        );
    } catch(error) {
        yield put(signUpFailure(error));
    }
}

export function* createClientProfile({ payload: { user, additionalData } }) {
    yield getSnapshotFromClientAuth(user, additionalData);
}

export function* onSignUpStart() {
    yield takeLatest(ClientActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(ClientActionTypes.SIGN_UP_SUCCESS, createClientProfile);
}

export function* forgotPassword({ payload: { email } }) {
    try {
        const res = yield tizkoForgotPassword(email);

        const message = yield put(forgotPasswordSuccess(res.data));
        console.log(message);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onForgotPasswordStart() {
    yield takeLatest(ClientActionTypes.FORGOT_PASSWORD_START, forgotPassword);
}

export function* clientSagas() {
    yield all([
        call(onForgotPasswordStart),
        call(onSignUpStart),
    ]);
}
