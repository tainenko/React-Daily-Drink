import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

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
                data-testid="checkbox"
                className="checkbox list-check"
                type="checkbox"
                onChange={handleChangeWithItem}
                checked={checked}
            />
            <div data-testid="item-name" className="list-name" onClick={toggleEditDetailWithItem}>{item.name}</div>
            <div data-testid="item-price" className="list-price" onClick={toggleEditDetailWithItem}>{item.price}</div>
            <div data-testid="item-note" className="list-note" onClick={toggleEditDetailWithItem}>{item.notes}</div>
        </div>
    );
};

DrinkListItem.propTypes = {
    item: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    toggleEditDetail: PropTypes.func.isRequired
};
export default DrinkListItem;