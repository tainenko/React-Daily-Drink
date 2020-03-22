import React from 'react';
import {useFormikContext} from "formik";

const ErrorMessage = ({component, name, className}) => {
    const CustomTag = `${component}`;
    const {errors} = useFormikContext();
    return (
        errors[name] ? <CustomTag className={className}>{errors[name]}</CustomTag> : null
    )
};

export default ErrorMessage