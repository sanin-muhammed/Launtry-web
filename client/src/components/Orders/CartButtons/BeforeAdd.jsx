import React from "react";

const BeforeAdd = ({addCart}) => {

    return (
        <div>
            <button onClick={addCart}>+Add</button>
        </div>
    );
};

export default BeforeAdd;
