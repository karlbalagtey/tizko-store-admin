import ProductActionTypes from "./product.types";

export const productAddStart = (productCredentials, history) => ({
    type: ProductActionTypes.PRODUCT_ADD_START,
    payload: productCredentials,
    history
});

export const productAddSuccess = (success) => ({
    type: ProductActionTypes.PRODUCT_ADD_SUCCESS,
    payload: success,
});

export const productAddFailure = (error) => ({
    type: ProductActionTypes.PRODUCT_ADD_FAILURE,
    payload: error,
});

export const fetchProductDetailStart = () => ({
    type: ProductActionTypes.FETCH_PRODUCT_DETAIL_START
});

export const fetchProductDetailSuccess = (products) => ({
    type: ProductActionTypes.FETCH_PRODUCT_DETAIL_SUCCESS,
    payload: products,
});

export const fetchProductDetailFailure = (error) => ({
    type: ProductActionTypes.FETCH_PRODUCT_DETAIL_FAILURE,
    payload: error,
});
