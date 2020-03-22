import React from 'react';
import {AddOrder} from '../actions'
import {Formik} from "formik";
import OrderSchema from "./orderschema";
import "./style.scss"
import "../../drinklist/views/style.scss"
import InnerForm from "./innerForm";


const OrderForm = ({initialValues = {}}) => (
    <Formik
        initialValues={initialValues}
        validationSchema={OrderSchema}
        onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }}>
        <InnerForm/>
    </Formik>
);

const getOrderById = (state, id) => {
    return state.filter((item) => {
        return item.id === id
    })
};

const mapStateToProps = (state) => {
    order:getOrderById()
}

const mapDispatchToProps = (dispatch) => {
    AddOrder:(values) => {
        dispatch(AddOrder(values));
    }
};


export default OrderForm;