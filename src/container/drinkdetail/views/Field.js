import React from "react";
import PropTypes from "prop-types";
import {useField} from "formik";

const Field = ({label, as = "input", ...props}) => {
    const [field, meta, helpers] = useField(props);
    const CustomTag = `${as}`;
    return (
        <div className="m-b-10">
            <label>
                {label}
                <CustomTag {...field} {...props} />
            </label>
            {meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    )
};

Field.propTypes = {
    label: PropTypes.string.isRequired,
    as: PropTypes.string
};


export default Field;