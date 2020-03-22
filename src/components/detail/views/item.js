import React from "react";
import PropTypes from "prop-types";
import {Field} from "formik";
import ErrorMessage from "./errormessage";

const DetailItem=({label,name,placeholder,errors,component="div"})=>{
    return (
        <div className="m-b-10">
            <label htmlFor={name}>{label}</label>
            <Field className="orderDetail__item" name={name} id={name} placeholder={placeholder}/>
            <ErrorMessage errors={errors} component={component} className="error" name={name}/>
        </div>
)
};

DetailItem.propTypes={
    label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired

};

export default DetailItem;