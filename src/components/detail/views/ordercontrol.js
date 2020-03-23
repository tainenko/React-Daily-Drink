import React from "react";
import PropTypes from "prop-types";

const OrderControl = ({isSubmitClickable, handleSubmit, handleCancel}) => (
    <div className="dailyDrink__orderList__control">
        <button type="submit" className={`btn btn-add transition ${isSubmitClickable ? "" : "disable"}`}
                onClick={handleSubmit}>Submit
        </button>
        <button type="input" className="btn btn-delete transition" onClick={handleCancel}>Cancel</button>
    </div>
);

OrderControl.propTypes = {
    isSubmitClickable: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};


export default OrderControl;