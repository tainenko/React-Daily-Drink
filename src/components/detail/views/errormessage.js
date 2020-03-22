import React from 'react';
const ErrorMessage = ({errors,component,name,className}) => {
    const CustomTag = `${component}`;
    return (
        errors[name] ? <CustomTag className={className}>{errors[name]}</CustomTag> : null
    )
};

export default ErrorMessage