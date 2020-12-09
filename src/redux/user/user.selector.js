import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectCurrentUserRole = createSelector(
    [selectUser],
    currentUser => (currentUser ? currentUser.role : null)
);

export const selectIsUserSubmitting = createSelector(
    [selectUser],
    user => user.isSubmitting
)

export const selectAlertNotificationsMessage = createSelector(
    [selectUser],
    user => user.message
)

export const selectAlertNotificationsSuccess = createSelector(
    [selectUser],
    user => user.success
)

export const selectAlertNotificationsError = createSelector(
    [selectUser],
    user => user.error
)