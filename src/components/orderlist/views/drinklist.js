import React from "react";
import Header from "../../header";
import OrderItem from "./orderItem";
import OrderListControl from "./listcontrol";
import OrderListTitle from "./title";

class DrinkListPage extends React.Component {
    state = {
        groups: [],
        ...this.props
    };

    handleChange = (item) => {
        const index = this.state.groups.indexOf(item.id);
        if (index === -1) {
            this.setState(prevState => ({
                groups: [...prevState.groups, item.id]
            }))
        } else {
            this.setState({
                groups: this.state.groups.filter((value) => value !== item.id)
            })
        }
    };
    toggleAllCheckbox = () => {
        if (this.state.groups.length !== this.state.list.length) {
            this.setState({
                groups: this.state.list.map((item) => {
                    return item.id
                })
            })
        } else {
            this.setState({
                groups: []
            })
        }
    };
    handleDeleteBtn = () => {
        this.setState({
            list: this.state.list.filter((item) => (this.state.groups.indexOf(item.id) === -1)),
            groups: []
        })
    };
    toggleEditDetail = () => {
    };


    render() {
        return (
            <div className="dailyDrink w900 p-20">
                <Header title="Daily Drink"/>
                <div className="dailyDrink__list">
                    <OrderListControl disDel={this.state.groups.length > 0} handleDeleteBtn={this.handleDeleteBtn}/>
                    <OrderListTitle
                        allChecked={0 !== this.state.groups.length && this.state.groups.length === this.state.list.length}
                        toggleAllCheckbox={this.toggleAllCheckbox}/>
                    {
                        this.state.list.map((item) => {
                            return <OrderItem key={item.id} item={item} handleChange={() => this.handleChange(item)}
                                              checked={this.state.groups.indexOf(item.id) !== -1}
                                              toggleEditDetail={this.toggleEditDetail}/>
                        })
                    }

                </div>
            </div>
        );
    }

}

export default DrinkListPage;