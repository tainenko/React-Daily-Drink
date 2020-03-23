import React from 'react';
import * as Yup from "yup";

const DrinkDetailErrorSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, '必須大於兩個字')
        .max(70, '不可超過70字')
        .required('必填項目'),
    price: Yup.number()
        .lessThan(200,"價格必須小於200元")
        .moreThan(0,"價格必須大於零")
        .integer("價格不能為小數")
        .required('必填項目'),
    notes:Yup.string()
        .max(300,'備註不可超過300字')
});

export default DrinkDetailErrorSchema;