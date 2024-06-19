import React from "react";
import rightArrow from "../../../assets/arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProceedBtn = () => {
    const { cartCount, totalPrice } = useSelector((state) => state.cart);
    // console.log({ cartCount });

    return (
        <Link to="/instructions" className="proceed_btn">
            <div className="total">
                <h3>₹ {totalPrice}</h3>
                <p>{cartCount} items</p>
            </div>
            <div className="proceed_div">
                Proceed
                <img src={rightArrow} alt="" />
            </div>
        </Link>
    );
};

export default ProceedBtn;
