import React from "react";

const Control = ({isDelClickable, handleAddItem, handleDeleteBtn}) => (
    <div className="dailyDrink__list__control">
        <button
            data-testid="add button"
            className="btn btn-add transition"
            onClick={handleAddItem}
        >
            + Add
        </button>
        <button
            data-testid="del button"
            className={`btn btn-delete transition ${isDelClickable ? "" : "disable"}`}
            onClick={handleDeleteBtn}
        >
            - Delete
        </button>
    </div>
);

export default Control;