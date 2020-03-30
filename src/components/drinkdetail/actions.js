import {ADD_ORDER, EDIT_ORDER, DEL_ORDER, DEL_SOME_ORDER} from "./actionsTypes";

let orderId = 0;
export const AddOrder = (item) => ({
    type: ADD_ORDER,
    id: orderId++,
    name: item.name,
    price: item.price,
    notes: item.notes
});

export const EditOrder = (item) => ({
    type: EDIT_ORDER,
    id: item.id,
    name: item.name,
    price: item.price,
    notes: item.notes
});
export const DelOrder = (id) => ({
    type: DEL_ORDER,
    id: id
});
export const DelSomeOrder = (object) => ({
    type: DEL_SOME_ORDER,
    total: object.total,
    group: object.group
});