import React from 'react';

const Title = ({isAllChecked, toggleAllCheckbox}) => (
    <div className="dailyDrink__list__head">
        <input
            className="checkbox list-check"
            type="checkbox"
            onChange={toggleAllCheckbox}
            checked={isAllChecked}
        />
        <div className="list-name">Name</div>
        <div className="list-price">Price</div>
        <div className="list-note">Note</div>
    </div>
);
export default Title;