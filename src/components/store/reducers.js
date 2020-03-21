import {combineReducers} from "redux";
import {reducer as OrderReducer} from "../detail"
const reducers=combineReducers({
    orders:OrderReducer
});

export default reducers;