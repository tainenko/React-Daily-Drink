import {Form} from "formik";
import React from "react";

const OrderControl=({handleCancel})=>(
    <div className="dailyDrink__orderList__control">
        <button className="btn btn-add transition">Submit</button>
        <button className="btn btn-delete transition" onClick={handleCancel}>Cancel</button>
    </div>
);

export default OrderControl;