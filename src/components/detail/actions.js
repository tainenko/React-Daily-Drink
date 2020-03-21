import {ADD_ORDER, EDIT_ORDER, DEL_ORDER} from "./actionsTypes";

var orderId = 0;
export const Add_Order = (name, price, notes) => ({
    type: ADD_ORDER,
    id: orderId++,
    name: name,
    price: price,
    notes: notes
});

export const Edir_Order=(id)=>({
    type:EDIT_ORDER,
    id:id
});
export const Del_Order=(id)=>({
    type:EDIT_ORDER,
    id:id
});