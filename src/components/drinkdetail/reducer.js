import {ADD_ORDER, DEL_ORDER, DEL_SOME_ORDER, EDIT_ORDER} from "./actionsTypes";
import diffObject from "../utils/tool";

const reducer = (state = {
    total: 2,
    group: {
        100: {
            name: "奶茶",
            price: 20,
            notes: ""
        },
        101: {
            name: "奶綠",
            price: 30,
            note: ""
        }
    }


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
                group:{
                    [action.id]:dropItem,
                    ...newGroup
                }
            }=state;
            return {
                total:state.total-1,
                group:{
                    ...newGroup
                }
            };
        }
        case DEL_SOME_ORDER: {
            return{
                total:state.total-action.total,
                group:diffObject(action.group,state.group)
            }

        }
        default:
            return state
    }
};

export default reducer;