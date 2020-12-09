import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShop = createSelector([selectShop], (shop) => shop.shop);

export const selectAllShopCustomers = createSelector(
    [selectShop],
    (shop) => shop.shop
);

export const selectAlertNotificationsMessage = createSelector(
    [selectShop],
    (shop) => shop.message
);

export const selectAlertNotificationsSuccess = createSelector(
    [selectShop],
    (shop) => shop.success
);

export const selectAlertNotificationsError = createSelector(
    [selectShop],
    (shop) => shop.error
);
