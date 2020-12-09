import { takeLatest, put, all, call } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

import {
    fetchCustomersSuccess,
    fetchProductsSuccess,
} from "./shop.actions";

import {
    alertNotificationError,
    alertNotificationMessage
} from "../alert/alert.actions";

import {
    tizkoFetchCustomers,
    tizkoFetchProducts
} from "../../api/tizko-api-shop";

export function* fetchCustomers() {
    try {
        const res = yield tizkoFetchCustomers();

        yield put(fetchCustomersSuccess(res.data.data.customers));
        yield put(alertNotificationMessage('List of customers'));
    } catch(error) {
        console.log(error);

        if (error.response.data.error === 'jwt expired') {
            yield put(alertNotificationMessage('Session has expired. Refresh browser'));
        } else {
            yield put(alertNotificationError(error.response.data.error));
        }
    }
}

export function* fetchProducts() {
    try {
        const res = yield tizkoFetchProducts();

        yield put(fetchProductsSuccess(res.data.data.products));
        yield put(alertNotificationMessage('List of products'));
    } catch(error) {
        console.log(error);

        if (error.response.data.error === 'jwt expired') {
            yield put(alertNotificationMessage('Session has expired. Refresh browser'));
        } else {
            yield put(alertNotificationError(error.response.data.error));
        }
    }
}

export function* onFetchCustomersStart() {
    yield takeLatest(ShopActionTypes.FETCH_CUSTOMERS_START, fetchCustomers);
}

export function* onFetchProductsStart() {
    yield takeLatest(ShopActionTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* shopSagas() {
    yield all([
        call(onFetchCustomersStart),
        call(onFetchProductsStart),
    ]);
}
