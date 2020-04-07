import React from "react";
import {Form} from "formik";
import Field from "./Field";
import Control from "./Control";

const Form = () => (
    <Form className="dailyDrink__orderList">
        <Field label="Name:" name="name" type="text" placeholder="請輸入飲料"/>
        <Field label="Price:" name="price" type="number" placeholder="請輸入價錢"/>
        <Field label="Notes:" name="notes" as="textarea" type="text" placeholder="備註：甜度、冰塊、加料…"/>
        <Control/>
    </Form>
);


export default Form;