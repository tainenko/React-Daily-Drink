import React from "react";
import Proptypes from "prop-types";

const Header = ({title}) => (
    <div className="dailyDrink__title">
        <p className="title p-20">{title}</p>
    </div>
);
Header.proptypes = {
    title: Proptypes.string.isRequired
};

export default Header;