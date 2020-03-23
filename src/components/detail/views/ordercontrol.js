import React from "react";

const OrderControl=({handleSubmit,handleCancel})=>(
    <div className="dailyDrink__orderList__control">
        <button type="submit" className="btn btn-add transition" onClick={handleSubmit}>Submit</button>
        <button type="input" className="btn btn-delete transition" onClick={handleCancel}>Cancel</button>
    </div>
);

export default OrderControl;