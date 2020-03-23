import {ADDORDER, EDITORDER, DELORDER,DELSOMEORDER} from "./actionsTypes";

let orderId = 0;
export const AddOrder = (values) => ({
    type: ADDORDER,
    id: orderId++,
    name: values.name,
    price: values.price,
    notes: values.notes
});

export const EditOrder = (id) => ({
    type: EDITORDER,
    id: id
});
export const DelOrder = (id) => ({
    type: DELORDER,
    id: id
});
export const DelSomeOrder = (list)=>({
    type:DELSOMEORDER,
    list:list
});