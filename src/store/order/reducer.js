import {ADD_ORDER, DEL_ORDER, DEL_SOME_ORDER, EDIT_ORDER} from "./actions_types";
import diffObject from "../../utils/object";

const reducer = (state = {
    total: 0,
    group: {}
}, action) => {
    switch (action.type) {
        case ADD_ORDER: {
            return {
                total: state.total + 1,
                group: {
                    ...state.group,
                    [action.id]: {
                        name: action.name,
                        price: action.price,
                        note: action.note
                    }
                }
            };
        }
        case EDIT_ORDER: {
            return {
                total: state.total,
                group: {
                    ...state.group,
                    [action.id]: {
                        name: action.name,
                        price: action.price,
                        notes: action.notes
                    },
                }
            };
        }
        case DEL_ORDER: {
            const {
                group: {
                    [action.id]: dropItem,
                    ...newGroup
                }
            } = state;
            return {
                total: state.total - 1,
                group: newGroup
            };
        }
        case DEL_SOME_ORDER: {
            return {
                total: state.total - action.total,
                group: diffObject(state.group, action.group)
            }
        }
        default:
            return state
    }
};

export default reducer;