import { combineReducers } from "redux";
import { categoryReducer } from "../../Reducers/CategoryReducer";
import { cartReducer } from "../../Reducers/CartReducer";
import { configureStore } from "@reduxjs/toolkit";


const reducer = combineReducers({ categoryReducer, cartReducer })
const store = () => {
    return configureStore({ reducer });
}
export default store()