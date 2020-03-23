import {Provider} from "react-redux";
import store from "./components/store";
import React from "react";
import ReactDOM from "react-dom";

import "./components/common/style.scss";
import "./components/common/reset.scss";
import DrinkListPage from "./components/orderlist/views/drinklist";
import {OrderDetailPage} from "./components/detail"

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
    <Provider store={store}>
        <DrinkListPage/>
        <OrderDetailPage/>
    </Provider>
    , wrapper) : false;