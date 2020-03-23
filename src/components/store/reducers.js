import {combineReducers} from "redux";
import {reducer as OrderReducer} from "../drinkdetail"
const reducers=combineReducers({
    orders:OrderReducer
});

export default reducers;