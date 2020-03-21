import {ADD_ORDER, DEL_ORDER, EDIT_ORDER} from "./actionsTypes";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ORDER: {
            return [
                {
                    id: action.id,
                    name: action.name,
                    notes: action.notes
                },
                ...state
            ]
        }
        case EDIT_ORDER:{
            return state.forEach((item)=>{
                if(item.id===action.id){
                    item.name=action.name;
                    item.notes=action.notes;
                }
            })
        }
        case DEL_ORDER:{
            return state.filter((item)=>{
                return item.id!==action.id
            })
        }
        default:
            return state
    }
};

export default reducer;