import React from 'react';
import Header from "../../components/header";
import DrinkDetailFormik from "../../components/drinkdetail/views/drink-detail-formik";

const DrinkDetailPage = () => {

    return (
    <div className="w900 p-20">
        <Header title="Drink DeTail"/>
        <DrinkDetailFormik />
    </div>
)};

export default DrinkDetailPage;