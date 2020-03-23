import {ADDORDER, DELORDER, DELSOMEORDER, EDITORDER} from "./actionsTypes";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADDORDER: {
            return [
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    notes: action.notes
                },
                ...state
            ]
        }
        case EDITORDER: {
            return state.forEach((item) => {
                if (item.id === action.id) {
                    item.name = action.name;
                    item.price = action.price;
                    item.notes = action.notes;
                }
            })
        }
        case DELORDER: {
            return state.filter((item) => {
                return item.id !== action.id
            })
        }
        case DELSOMEORDER: {
            return state.filter((item) => {
                return action.list.indexOf(item.id) === -1
            })
        }
        default:
            return state
    }
};

export default reducer;