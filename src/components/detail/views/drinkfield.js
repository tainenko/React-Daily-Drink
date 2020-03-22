import React from "react";
import PropTypes from "prop-types";
import {useField} from "formik";

const DrinkField = ({label,...props}) => {
    const [field,meta,helpers]=useField(props)
    return (
        <div className="m-b-10">
            <label>
                {label}
                <input {...field} {...props} />
            </label>
            {meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    )
};

DrinkField.propTypes = {
    label: PropTypes.string.isRequired,
};


export default DrinkField;