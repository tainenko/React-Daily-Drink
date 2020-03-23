import React from 'react';
import Header from "../../header";
import OrderFormik from "./orderFormik";

const OrderDetailPage = ({item}) => (
    <div className="w900 p-20">
        <Header title="Drink DeTail"/>
        <OrderFormik initialValues={item}/>
    </div>
);

export default OrderDetailPage;