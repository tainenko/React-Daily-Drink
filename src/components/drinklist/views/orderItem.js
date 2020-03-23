import "./style.scss";
import React from "react";

const OrderItem = ({item, handleChange, checked, toggleEditDetail}) => (
    <div
        key={item.id}
        className="dailyDrink__list__order transition"
    >
        <input
            className="checkbox list-check"
            type="checkbox"
            onChange={handleChange}
            checked={checked}
        />
        <div className="list-name" onClick={() => toggleEditDetail(item)}>{item.name}</div>
        <div className="list-price" onClick={() => toggleEditDetail(item)}>{item.price}</div>
        <div className="list-note" onClick={() => toggleEditDetail(item)}>{item.notes}</div>
    </div>
);

export default OrderItem;