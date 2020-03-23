import React from 'react';
import Header from "../../header";
import OrderForm from "./orderform";

const OrderDetailPage = ({AddOrder}) => (
    <div className="w900 p-20">
        <Header title="Drink DeTail"/>
        <OrderForm/>
    </div>
);



export default OrderDetailPage;