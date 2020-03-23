import React, {useState} from "react";
import Header from "../../header";
import DrinkListItem from "./drink-list-item";
import DrinkListControl from "./drink-list-control";
import OrderListTitle from "./title";
import {connect} from "react-redux";
import {DelSomeOrder} from "../../detail/actions";
import {history} from "../../../App.jsx"

const DrinkListPage = ({orders, DelSomeOrder}) => {
    const [group, setGroup] = useState([]);


    const handleChange = (item) => {
        const index = group.indexOf(item.id);
        if (index === -1) {
            setGroup((prevState) => (
                [...prevState, item.id]
            ))
        } else {
            setGroup((prevState) => (prevState.filter((value) => value !== item.id)
            ))
        }
    };
    const toggleAllCheckbox = () => {
        if (group.length !== orders.length) {
            setGroup(orders.map((item) => item.id))
        } else {
            setGroup([])
        }
    };
    const handleDeleteBtn = () => {
        DelSomeOrder(group);
        setGroup([])
    };
    const toggleEditDetail = (item) => {
        history.push({
            pathname:'/detail',
            state:item
        })
    };
    const toggleAddStatus=()=>{
        history.push('/detail')

    };


    return (
        <div className="dailyDrink w900 p-20">
            <Header title="Daily Drink"/>
            <div className="dailyDrink__list">
                <DrinkListControl isDelClickable={group.length > 0}
                                  handleDeleteBtn={handleDeleteBtn}
                                  toggleAddStatus={toggleAddStatus}/>
                <OrderListTitle
                    allChecked={0 !== group.length && group.length === orders.length}
                    toggleAllCheckbox={toggleAllCheckbox}/>
                {
                    orders ?
                        orders.map((item) => {
                            return <DrinkListItem key={item.id} item={item} handleChange={() => handleChange(item)}
                                                  checked={group.indexOf(item.id) !== -1}
                                                  toggleEditDetail={()=>toggleEditDetail(item)}/>
                        })
                        : null
                }

            </div>
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        DelSomeOrder: (list) => {
            dispatch(DelSomeOrder(list))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkListPage);