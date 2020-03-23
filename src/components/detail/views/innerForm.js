import React from "react";
import {Form, Formik, useField, useFormikContext} from "formik";
import DrinkField from "./drinkfield";
import OrderControl from "./ordercontrol";

const InnerForm = props => (
    <Form className="dailyDrink__orderList">
        <DrinkField label="Name:" name="name" type="text" placeholder="請輸入飲料"/>
        <DrinkField label="Price:" name="price" type="number" placeholder="請輸入價錢"/>
        <DrinkField label="Notes:" name="notes" as="textarea" type="text" placeholder="備註：甜度、冰塊、加料…"/>
        <OrderControl/>
    </Form>
);


export default InnerForm;