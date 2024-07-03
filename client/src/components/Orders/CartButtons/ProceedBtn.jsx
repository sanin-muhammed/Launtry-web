import React from "react";
import rightArrow from "../../../assets/arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { setInstructions } from "../../../Redux/reducers/instructions";

const ProceedBtn = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { service } = useSelector((state) => state.cart);
    const { cartCount, totalPrice } = useSelector((state) => state.cart);
    // console.log({ cartCount });

    const handleButton = async () => {
        if (cartCount > 0) {
            if (service.service === "Washing" || service.service === "Wash & Iron") {
                navigate("/instructions");
            } else {
                dispatch(setInstructions(null));
                navigate("/summary");
            }
        } else {
            enqueueSnackbar("Please select products", { variant: "info" });
        }
    };

    return (
        <button onClick={handleButton} className="proceed_btn">
            <div className="total">
                <h3>₹ {totalPrice}</h3>
                <p>{cartCount} items</p>
            </div>
            <div className="proceed_div">
                Proceed
                <img src={rightArrow} alt="" />
            </div>
        </button>
    );
};

export default ProceedBtn;
