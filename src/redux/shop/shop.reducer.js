import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    customers: null,
    products: null,
    isSubmitting: null,
    shop: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_CUSTOMERS_START:
            return {
                ...state,
                isSubmitting: true
            };
        case ShopActionTypes.FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                isSubmitting: false,
                customers: action.payload,
            };
        case ShopActionTypes.FETCH_CUSTOMERS_FAILURE:
            return {
                ...state,
                isSubmitting: false,
            };
        case ShopActionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                isSubmitting: true
            };
        case ShopActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isSubmitting: false,
                products: action.payload,
            };
        case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isSubmitting: false,
            };
        default:
            return state;
    }
};

export default shopReducer;
