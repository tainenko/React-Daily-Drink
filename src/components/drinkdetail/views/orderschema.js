import React from 'react';
import * as Yup from "yup";

const OrderSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    price: Yup.number()
        .lessThan(200,"價格必須小於200元")
        .moreThan(0,"價格必須大於零")
        .integer("價格不能為小數")
        .required('Required'),
    notes:Yup.string()
        .max(300,'備註不可超過300字')
});

export default OrderSchema;