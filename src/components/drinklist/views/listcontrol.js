import React from "react";

const OrderListControl = ({isDelClickable, toggleAddStatus, handleDeleteBtn}) => (
    <div className="dailyDrink__list__control">
        <button
            className="btn btn-add transition"
            onClick={toggleAddStatus}
        >
            + Add
        </button>
        <button
            className={`btn btn-delete transition ${isDelClickable ? "" : "disable"}`}
            onClick={handleDeleteBtn}
        >
            - Delete
        </button>
    </div>
);

export default OrderListControl;