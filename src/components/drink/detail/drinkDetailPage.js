import React from 'react';
import Header from "../../components/header";
import DrinkDetailFormik from "../../components/drink/detail/views/Formik";

const DrinkDetailPage = () => {

    return (
    <div className="w900 p-20">
        <Header title="Drink DeTail"/>
        <DrinkDetailFormik />
    </div>
)};

export default DrinkDetailPage;