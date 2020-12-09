import { takeLatest, put, all, call } from "redux-saga/effects";

import ProductActionTypes from "./product.types";

import {
    fetchProductDetailSuccess,
    productAddSuccess,
} from "./product.actions";

import {
    alertNotificationSuccess,
    alertNotificationError
} from "../alert/alert.actions";

import {
    tizkoAddProduct,
    tizkoFetchProductDetail
} from "../../api/tizko-api-shop";
import { productAddFailure } from "./product.actions";

export function* productAdd({
    payload: { name, description, price, weight, category, stock, sku },
    history
}) {
    try {
        const res = yield tizkoAddProduct(name, description, price, weight, category, stock, sku);

        yield put(productAddSuccess(res.data.data));
        yield put(alertNotificationSuccess('Added product', '/dashboard/products'));
    } catch(error) {
        console.log(error);
        yield put(productAddFailure(error.response.data.error));
        yield put(alertNotificationError(error.response.data.error));
    }
}

export function* fetchProductDetail() {
    try {
        // const res = yield tizkoFetchProductDetail();

        yield put(fetchProductDetailSuccess(res.data.data));
    } catch(error) {
        console.log(error.response.data.error);
        yield put(fetchProductDetailFailure(error.response.data.error));
    }
}

export function* onProductAddStart() {
    yield takeLatest(ProductActionTypes.PRODUCT_ADD_START, productAdd);
}

export function* onFetchProductDetailStart() {
    yield takeLatest(ProductActionTypes.FETCH_PRODUCT_DETAIL_START, fetchProductDetail);
}

export function* productSagas() {
    yield all([
        call(onProductAddStart),
        call(onFetchProductDetailStart),
    ]);
}
