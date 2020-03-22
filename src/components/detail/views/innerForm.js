import React from "react";
import {Form, Formik} from "formik";
import DrinkField from "./drinkfield";
import OrderControl from "./ordercontrol";

const InnerForm = props => (
    <Form className="dailyDrink__orderList">
        <DrinkField label="Name:" name="name" placeholder="請輸入飲料"/>
        <DrinkField label="Price:" name="price" filedtype="number" placeholder="請輸入價錢"/>
        <DrinkField label="Notes:" name="notes" as="textarea" placeholder="備註：甜度、冰塊、加料…"/>
        <OrderControl handleCancel={(e) => {
            e.preventDefault();
        }}/>
    </Form>
);

export default InnerForm;