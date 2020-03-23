import React from 'react';
import PropTypes from "prop-types";
import {Formik} from "formik";
import OrderSchema from "./orderschema";
import "./style.scss"
import InnerForm from "./innerForm";
import {AddOrder} from "../actions";
import {connect} from "react-redux";


const OrderFormik = ({item = {}, handleAddOrder}) => (
    <Formik
        initialValues={
            {
                ...item,
                handleCancel: () => {
                    console.log("Delete Button has been clicked!")
                }
            }
        }
        validationSchema={OrderSchema}
        onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            handleAddOrder({
                name: values.name,
                price: values.price,
                notes: values.notes
            });
        }}>
        <InnerForm/>
    </Formik>
);

OrderFormik.propTypes = {
    initialValues: PropTypes.object
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleAddOrder: (item) => {
            dispatch(AddOrder(item))
        }
    }

};

export default connect(null, mapDispatchToProps)(OrderFormik);