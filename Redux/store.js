//archivo para controlar el almacenamiento (store) con redux - App
import { createStore, combineReducer, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import cartItems from "./Reducers/cartItem";

const reducers = combineReducers({
    cartItems: cartItems
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;