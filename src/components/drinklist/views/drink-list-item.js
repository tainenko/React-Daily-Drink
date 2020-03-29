import "./style.scss";
import React from "react";

const DrinkListItem = ({item, id, handleChange, checked, toggleEditDetail}) => {
    const handleChangeWithItem = () => {
        handleChange(id)
    };
    const toggleEditDetailWithItem = () => {
        toggleEditDetail({
            id: id,
            ...item
        })
    };
    return (
        <div
            className="dailyDrink__list__order transition"
        >
            <input
                className="checkbox list-check"
                type="checkbox"
                onChange={handleChangeWithItem}
                checked={checked}
            />
            <div className="list-name" onClick={toggleEditDetailWithItem}>{item.name}</div>
            <div className="list-price" onClick={toggleEditDetailWithItem}>{item.price}</div>
            <div className="list-note" onClick={toggleEditDetailWithItem}>{item.notes}</div>
        </div>
    );
};

export default DrinkListItem;