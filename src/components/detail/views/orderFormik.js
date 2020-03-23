import React from 'react';
import PropTypes from "prop-types";
import {Formik} from "formik";
import OrderSchema from "./orderschema";
import "./style.scss"
import InnerForm from "./innerForm";


const OrderForm = ({initialValues = {}}) => (
    <Formik
        initialValues={{
            ...initialValues,
            handleCancel: () => {
                console.log("Delete Button has been clicked!")
            }
        }
        }
        validationSchema={OrderSchema}
        onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
        }}
    >
        <InnerForm/>
    </Formik>
);

OrderForm.propTypes = {
    initialValues: PropTypes.object
};

export default OrderForm;