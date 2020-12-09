import { createSelector } from "reselect";

const selectDashboard = state => state.dashboard;

export const selectDashboardMenu = createSelector(
    [selectDashboard],
    dashboard => dashboard.menu
);

export const selectDashboardTotals = createSelector(
    [selectDashboard],
    dashboard => dashboard.totals
);