import ProductActionTypes from "./product.types";

const INITIAL_STATE = {
    customers: null,
    products: null,
    productDetail: null,
    isSubmitting: null,
    message: null,
    error: null,
    success: null,
    shop: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductActionTypes.PRODUCT_ADD_START:
            return {
                ...state,
                isSubmitting: true
            };
        case ProductActionTypes.PRODUCT_ADD_SUCCESS:
            return {
                ...state,
                isSubmitting: false,
                success: action.payload,
                message: null,
                error: null
            };
        case ProductActionTypes.PRODUCT_ADD_FAILURE:
            return {
                ...state,
                isSubmitting: false,
                error: action.payload,
                message: null,
                success: null
            };
        case ProductActionTypes.FETCH_PRODUCT_DETAIL_START:
            return {
                ...state,
                isSubmitting: true
            };
        case ProductActionTypes.FETCH_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                isSubmitting: false,
                productDetail: action.payload,
                message: null,
                error: null
            };
        case ProductActionTypes.FETCH_PRODUCT_DETAIL_FAILURE:
            return {
                ...state,
                isSubmitting: false,
                error: action.payload,
                message: null,
                success: null
            };
        default:
            return state;
    }
};

export default productReducer;
