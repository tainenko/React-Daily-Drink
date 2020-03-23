import React from 'react';
import Header from "../../header";
import OrderFormik from "./drink-detail-formik";

const DrinkDetailPage = () => {

    return (
    <div className="w900 p-20">
        <Header title="Drink DeTail"/>
        <OrderFormik />
    </div>
)};

export default DrinkDetailPage;