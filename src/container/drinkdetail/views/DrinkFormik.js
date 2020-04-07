import React from 'react';
import PropTypes from "prop-types";
import {Formik} from "formik";
import DetailErrorSchema from "./ErrorSchema";
import "./style.scss"
import InnerForm from "./InnerForm";
import {AddOrder, EditOrder} from "../../../store/order/actions";
import {connect} from "react-redux";
import {history} from "../../../App.jsx";
import {useLocation} from "react-router-dom";


const DrinkFormik = ({handleAddOrder, handleEditOrder}) => {
    const location = useLocation();
    const item = location.state;
    const handleSubmit = item ? handleEditOrder : handleAddOrder;
    return (
        <Formik
            initialValues={
                {
                    ...item,
                    handleCancel: () => {
                        history.push('/');
                    }
                }
            }
            validationSchema={DetailErrorSchema}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                handleSubmit({
                    id:values.id,
                    name: values.name,
                    price: values.price,
                    notes: values.notes
                });
                history.push('/');
            }}>
            <InnerForm/>
        </Formik>
    );
};

DrinkFormik.propTypes = {
    handleAddOrder: PropTypes.func.isRequired,
    handleEditOrder: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleAddOrder: (item) => {
            dispatch(AddOrder(item))
        },
        handleEditOrder: (item) => {
            dispatch(EditOrder(item))
        }
    }

};

export default connect(null, mapDispatchToProps)(DrinkFormik);