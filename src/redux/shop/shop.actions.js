import ShopActionTypes from "./shop.types";

export const fetchCustomersStart = () => ({
    type: ShopActionTypes.FETCH_CUSTOMERS_START
});

export const fetchCustomersSuccess = (customers) => ({
    type: ShopActionTypes.FETCH_CUSTOMERS_SUCCESS,
    payload: customers,
});

export const fetchCustomersFailure = (error) => ({
    type: ShopActionTypes.FETCH_CUSTOMERS_FAILURE,
    payload: error,
});

export const fetchProductsStart = () => ({
    type: ShopActionTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (products) => ({
    type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: ShopActionTypes.FETCH_CUSTOMERS_FAILURE,
    payload: error,
});
