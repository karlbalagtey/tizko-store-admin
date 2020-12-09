import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";
import { shopSagas } from "./shop/shop.sagas";
import { productSagas } from "./product/product.sagas";
import { alertSagas } from "./alert/alert.sagas";

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(shopSagas),
        call(productSagas),
        call(alertSagas),
    ]);
}
