import {combineReducers} from "redux";
import OrderReducer from "./order/reducer"

const reducers = combineReducers({
    orders: OrderReducer
});

export default reducers;