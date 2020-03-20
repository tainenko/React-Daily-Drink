import Provider from "react-redux";
import store from "./components/store";
import React from "react";
import ReactDOM from "react-dom";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
    <Provider store={store}>

    </Provider>
    , wrapper) :false;