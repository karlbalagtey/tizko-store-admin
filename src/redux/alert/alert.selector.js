import { createSelector } from "reselect";

const selectAlert = state => state.alert;

export const selectAlertNotificationsMessage = createSelector(
    [selectAlert],
    alert => alert.message
)

export const selectAlertNotificationsSuccess = createSelector(
    [selectAlert],
    alert => alert.success
)

export const selectAlertNotificationsError = createSelector(
    [selectAlert],
    alert => alert.error
)

export const selectAlertNotificationsRedirect = createSelector(
    [selectAlert],
    alert => alert.redirect
)