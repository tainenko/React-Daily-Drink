import React from 'react';
import Header from "../../header";
import DrinkDetailFormik from "./views/DrinkFormik";

const DrinkDetailPage = () => {

    return (
    <div className="w900 p-20">
        <Header title="Drink DeTail"/>
        <DrinkDetailFormik />
    </div>
)};

export default DrinkDetailPage;