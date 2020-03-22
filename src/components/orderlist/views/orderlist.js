import "./style.scss";
import React from "react";

const OrderList = ({list,handleChange,checked,toggleEditDetail}) => (
    list.map((item) => (
        <div
            key={item.id}
            className="dailyDrink__list__order transition"
            onClick={() => toggleEditDetail(item)}
        >
            <input
                className="checkbox list-check"
                type="checkbox"
                onChange={handleChange}
                checked={checked}
            />
            <div className="list-name">{item.name}</div>
            <div className="list-price">{item.price}</div>
            <div className="list-note">{item.notes}</div>
        </div>
    ))
);


export default OrderList;