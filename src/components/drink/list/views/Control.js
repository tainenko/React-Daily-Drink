import React from "react";
import PropTypes from "prop-types";

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

Control.propTypes = {
    isDelClickable: PropTypes.bool.isRequired,
    handleAddItem: PropTypes.func,
    handleDeleteBtn: PropTypes.func
};

export default Control;