import React from "react";

const AfterAdd = ({ incCart, decCart, count }) => {
    return (
        <div className="count_btn">
            <span onClick={incCart}>+</span>
            <p>{count}</p>
            <span onClick={decCart}>-</span>
        </div>
    );
};

export default AfterAdd;
