import {combineReducers} from "redux";
import {reducer as OrderReducer} from "../components/drinkdetail"
const reducers=combineReducers({
    orders:OrderReducer
});

export default reducers;