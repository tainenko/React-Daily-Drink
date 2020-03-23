import React from "react";
import PropTypes from "prop-types";
import {useFormikContext} from "formik";

const OrderControl = () => {
    const {values, isSubmitting} = useFormikContext();
    return (<div className="dailyDrink__orderList__control">
            <button type="submit"
                    className={`btn btn-add transition ${!!(values.name && values.price) ? "" : "disable"}`}
                    disabled={isSubmitting}>
                Submit
            </button>
            <button type="button" className="btn btn-delete transition" onClick={values.handleCancel}>Cancel</button>
        </div>
    )
};


export default OrderControl;