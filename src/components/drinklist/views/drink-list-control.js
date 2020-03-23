import React from "react";

const DrinkListControl = ({isDelClickable, handleAddItem, handleDeleteBtn}) => (
    <div className="dailyDrink__list__control">
        <button
            className="btn btn-add transition"
            onClick={handleAddItem}
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

export default DrinkListControl;