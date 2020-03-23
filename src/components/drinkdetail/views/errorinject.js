import React from "react";

const ErrorInject = (props) => {
    return React.Children.map(props.children, child => {
        if (child)
            return React.cloneElement(child, {errors: props.errors});
        else
            return child;
    })

};

export default ErrorInject;