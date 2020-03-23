import {ADD_ORDER, DEL_ORDER, DEL_SOME_ORDER, EDIT_ORDER} from "./actionsTypes";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ORDER: {
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
        case EDIT_ORDER: {
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        id: action.id,
                        name: action.name,
                        price: action.price,
                        notes: action.notes
                    }

                }
            })
        }
        case DEL_ORDER: {
            return state.filter((item) => {
                return item.id !== action.id
            })
        }
        case DEL_SOME_ORDER: {
            return state.filter((item) => {
                return action.list.indexOf(item.id) === -1
            })
        }
        default:
            return state
    }
};

export default reducer;