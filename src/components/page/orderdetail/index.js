import React from 'react';
import Header from "../../header";
import {Formik} from "formik";
import InnerForm from "../../detail/views/innerForm";
import OrderSchema from "../../detail/views/orderschema";
import OrderForm from "../../detail/views/orderform";

const OrderDetailPage = ({AddOrder}) => (
    <div className="w900 p-20">
        <Header title="Drink DeTail"/>
        <OrderForm/>
    </div>
);



export default OrderDetailPage;