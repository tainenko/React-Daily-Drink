import {combineReducers} from "redux";
import {reducer as OrderReducer} from "../components/drink/detail"

const reducers = combineReducers({
    orders: OrderReducer
});

export default reducers;