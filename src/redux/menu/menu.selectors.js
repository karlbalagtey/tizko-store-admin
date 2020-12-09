import { createSelector } from "reselect";

const selectMenu = state => state.menu;

export const selectMainMenu = createSelector(
    [selectMenu],
    menu => menu.menu
);
