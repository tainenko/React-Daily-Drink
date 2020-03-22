import React from "react";
import Header from "../../header";
import OrderItem from "./orderItem";
import OrderListControl from "./listcontrol";
import OrderListTitle from "./title";

class DrinkListPage extends React.Component {
    state={
        groups:[1]
    };

    handleChange = (item) => {
        const index = this.state.groups.indexOf(item.id);
        if (index === -1) {
            this.setState(prevState=>({
                groups:[...prevState.groups,item.id]
            }))
        } else {
            this.setState({
                groups:this.state.groups.filter((value)=>value!==item.id)
            })
        }
    };



    render() {
        return (
            <div className="dailyDrink w900 p-20">
                <Header title="Daily Drink"/>
                <div className="dailyDrink__list">
                    <OrderListControl/>
                    <OrderListTitle/>
                    {
                        this.props.list.map((item) => {
                            return <OrderItem key={item.id} item={item} handleChange={() => this.handleChange(item)}
                                              checked={this.state.groups.indexOf(item.id) !== -1} />
                        })
                    }

                </div>
            </div>
        );
    }

}

export default DrinkListPage;