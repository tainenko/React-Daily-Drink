import React from 'react';
import PropTypes from "prop-types";
import {Formik} from "formik";
import DrinkDetailErrorSchema from "./drink-detail-error-schema";
import "./style.scss"
import DrinkDetailInnerform from "./drink-detail-innerform";
import {AddOrder, EditOrder} from "../actions";
import {connect} from "react-redux";
import {history} from "../../../App.jsx";
import {useLocation} from "react-router-dom";


const DrinkDetailFormik = ({handleAddOrder, handleEditOrder}) => {
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
            validationSchema={DrinkDetailErrorSchema}
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
            <DrinkDetailInnerform/>
        </Formik>
    );
};

DrinkDetailFormik.propTypes = {
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

export default connect(null, mapDispatchToProps)(DrinkDetailFormik);