import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpClientSuccess,
    signUpClientFailure,
    forgotPasswordSuccess,
    resetPasswordSuccess,
    noUserFound,
} from "./user.actions";

import {
    alertNotificationSuccess,
    alertNotificationError,
    alertNotificationMessage,
    alertNotification,
} from "../alert/alert.actions";

import {
    tizkoSignIn,
    tizkoRevokeToken,
    getCurrentUser,
    tizkoForgotPassword,
    tizkoUpdateUserProfile,
    tizkoResetPassword,
    tizkoCreateNewClient,
    tizkoValidateResetToken,
} from "../../api/tizko-api";

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const user = yield tizkoSignIn(email, password);
        
        console.log(user);

        yield put(signInSuccess({ id: user.id, ...user.data }));

        localStorage.setItem("user", JSON.stringify(user.data));
        yield put(alertNotificationMessage('Welcome aboard master!'));
    } catch (error) {
        yield put(alertNotificationError(error.response.data.error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signUpClient({ payload: { email, password, firstName, lastName } }) {
    try {
        const { user } = yield tizkoCreateNewClient(
            email,
            password
        );
        yield put(
            signUpClientSuccess({ user, additionalData: { firstName, lastName } })
        );
    } catch(error) {
        yield put(alertNotificationError(error.response.data.error));
    }
}

export function* onSignUpClientStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_CLIENT_START, signUpClient);
}

export function* signOutUser() {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user.jwtToken);
        
        yield tizkoRevokeToken(user.jwtToken);
        yield put(signOutSuccess());
        localStorage.removeItem("user");
        yield put(alertNotificationSuccess('Signed out user'));
    } catch (error) {
        yield put(alertNotificationError(error.response.data.error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser);
}

export function* isUserAuthenticated() {
    try {
        // jwt token is refreshed if token is expired
        const user = yield getCurrentUser();
        console.log('isuser: ' + JSON.stringify(user));

        localStorage.setItem("user", JSON.stringify(user));
        
        yield put(signInSuccess({ user }));
    } catch (error) {
        yield put(noUserFound(error.message));
        yield put(alertNotificationError(error.response.data.error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* forgotPassword({ payload: { email } }) {
    try {
        const res = yield tizkoForgotPassword(email);
        console.log(res);
        console.log(res.data);

        yield put(forgotPasswordSuccess(res.data.message));
    } catch (error) {
        yield put(alertNotificationError(error.response.data.error));
    }
}

export function* resetPassword({ payload: { token, password, confirmPassword } }) {
    try {
        const res = yield tizkoResetPassword(token, password, confirmPassword);
        console.log(res);

        yield put(resetPasswordSuccess(res.data.message));
    } catch (error) {
        console.log(error);
        yield put(alertNotificationError(error.response.data.error));
    }
}

export function* validateResetToken({ payload: { token } }) {
    try {
        const res = yield tizkoValidateResetToken(token);

        console.log(res);
        
        // yield put(validateResetTokenSuccess(res.data.success));

    } catch (error) {
        console.log(error);
        yield put(alertNotificationError(error.response.data.error));
    }
}

export function* updateUserProfile({ payload: { userCredentials }}) {
    try {
        const res = yield tizkoUpdateUserProfile(userCredentials);
        console.log(res);
    } catch(error) {
        console.log(error);
        yield put(alertNotificationError(error.response.data.error));
    }
}

export function* onForgotPasswordStart() {
    yield takeLatest(UserActionTypes.FORGOT_PASSWORD_START, forgotPassword);
}

export function* onResetPasswordStart() {
    yield takeLatest(UserActionTypes.RESET_PASSWORD_START, resetPassword);
}

export function* onValidateResetTokenStart() {
    yield takeLatest(UserActionTypes.VALIDATE_RESET_TOKEN_START, validateResetToken);
}

export function* onUpdateUserProfileStart() {
    yield takeLatest(UserActionTypes.UPDATE_USER_PROFILE_START, updateUserProfile);
}

export function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onForgotPasswordStart),
        call(onResetPasswordStart),
        call(onSignOutStart),
        call(onSignUpClientStart),
    ]);
}
