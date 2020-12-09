import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import dashboardReducer from "./dashboard/dashboard.reducer";
import menuReducer from "./menu/menu.reducer";
import shopReducer from "./shop/shop.reducer";
import productReducer from "./product/product.reducer";
import alertReducer from "./alert/alert.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
};

const rootReducer = combineReducers({
    user: userReducer,
    dashboard: dashboardReducer,
    menu: menuReducer,
    shop: shopReducer,
    product: productReducer,
    alert: alertReducer,
});

export default persistReducer(persistConfig, rootReducer);
