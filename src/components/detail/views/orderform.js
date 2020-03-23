import React from 'react';
import PropTypes from "prop-types";
import {Formik} from "formik";
import OrderSchema from "./orderschema";
import "./style.scss"
import InnerForm from "./innerForm";


const OrderForm = ({initialValues = {}, onSubmit}) => (
    <Formik
        initialValues={initialValues}
        validationSchema={OrderSchema}
        onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
            onSubmit(values)
        }}>
        <InnerForm/>
    </Formik>
);

OrderForm.propTypes = {
    initialVlaues: PropTypes.object.isRequired,
    onSubmit: PropTypes.object.isRequired
}

export default OrderForm;