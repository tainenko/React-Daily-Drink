import React from 'react';
import {connect} from "react-redux"
import {AddOrder} from '../actions'
import {Formik, Field, Form} from "formik";
import OrderSchema from "./orderschema";
import ErrorMessage from "./errormessage";
import DetailItem from "./item";
import "./style.scss"
import "../../drinklist/views/style.scss"



const OrderForm = ({AddOrder}) => (
    <div>
        <div className="dailyDrink__title">
            <p className="title p-20">Drink Order</p>
        </div>

        <Formik
            initialValues={{}}
            validationSchema={OrderSchema}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}>
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <Form className="dailyDrink__orderList">
                    <DetailItem label="Name:" name="name" errors={errors} placeholder="請輸入飲料"/>
                    <label htmlFor="Price">Price</label>
                    <Field type="number" name="price" placeholder="請輸入價碼"/>
                    <ErrorMessage errors={errors} component="div" className="error" name="price"/>
                    <label htmlFor="Notes">Notes</label>
                    <Field name="notes" as="textarea" placeholder="備註：甜度、冰塊、加料…"/>
                    <ErrorMessage errors={errors} component="div" className="error" name="notes"/>
                    <div className="dailyDrink__orderList__control">
                        <button type="submit" className="btn btn-add transition">Submit</button>
                        <button className="btn btn-delete transition">Cancel</button>
                    </div>
                </Form>)}
        </Formik>
    </div>
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


export default connect(null, mapDispatchToProps)(OrderForm);