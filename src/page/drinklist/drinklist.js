import React, {useState} from "react";
import Header from "../../components/header";
import DrinkListItem from "../../components/drinklist/views/drink-list-item";
import DrinkListControl from "../../components/drinklist/views/drink-list-control";
import DrinkListTitle from "../../components/drinklist/views/drink-list-title";
import {connect} from "react-redux";
import {actions} from "../../components/drinkdetail";
import {history} from "../../App.jsx"

const DrinkListPage = ({orders, DelSomeOrder}) => {
    const [group, setGroup] = useState({
        total: 0,
        group: {}
    });


    const handleChange = (id) => {
        const isExist = group.group.hasOwnProperty(id);
        if (isExist === false) {
            setGroup({
                total: group.total + 1,
                group: {
                    [id]: orders.group[id],
                    ...group.group
                }
            });
        } else {
            const {
                [id]: item,
                ...newGroup
            } = group.group;
            setGroup({
                total: group.total - 1,
                group: newGroup
            });
        }
    };
    const toggleAllCheckbox = () => {
        if (group.total !== orders.total) {
            setGroup(orders);
        } else {
            setGroup({
                total: 0,
                group: {}
            });
        }
    };
    const handleDeleteBtn = () => {
        DelSomeOrder(group);
        setGroup({
            total: 0,
            group: {}
        });
    };
    const toggleEditDetail = (item) => {
        history.push({
            pathname: '/detail',
            state: item
        })
    };
    const handleAddItem = () => {
        history.push('/detail')

    };


    return (
        <div className="dailyDrink w900 p-20">
            <Header title="Daily Drink"/>
            <div className="dailyDrink__list">
                <DrinkListControl isDelClickable={group.total > 0}
                                  handleDeleteBtn={handleDeleteBtn}
                                  handleAddItem={handleAddItem}/>
                <DrinkListTitle
                    isAllChecked={0 !== orders.total && group.total === orders.total}
                    toggleAllCheckbox={toggleAllCheckbox}/>
                {
                    orders ?
                        Object.keys(orders.group).map((id) => {
                            return <DrinkListItem key={id} item={orders.group[id]} id={id} handleChange={handleChange}
                                                  checked={group.group.hasOwnProperty(id)}
                                                  toggleEditDetail={toggleEditDetail}/>
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
        DelSomeOrder: (object) => {
            dispatch(actions.DelSomeOrder(object))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkListPage);