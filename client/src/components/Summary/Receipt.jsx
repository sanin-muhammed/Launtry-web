import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setTotalAmount } from "../../Redux/reducers/summary";

const Receipt = () => {
    const dispatch = useDispatch();
    const { cartList, totalPrice } = useSelector((state) => state.cart);
    console.log("cartList = ", cartList, "totalPrice", totalPrice);
    const [total, setTotal] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(50);
    const [couponReduction, setCouponReduction] = useState(50);
    const [tax, setTax] = useState(50);

    const findTotal = () => {
        setTotal(totalPrice + deliveryCharge + tax - couponReduction);
    };
    // const setTotalAmount = ()=>{

    // }

    useEffect(() => {
        findTotal();
        dispatch(setTotalAmount(total));
    }, [total, cartList, totalPrice]);

    return (
        <div className="receipt_container">
            <h3>Receipt</h3>
            <div className="deliveries cart_items">
                {cartList.map((item, index) => (
                    <div className="receipt_item" key={index}>
                        <p>{item.product}</p>
                        <p>X {item.count}</p>
                        <p>₹ {item.count * item.price}</p>
                    </div>
                ))}
            </div>
            <hr id="first_hr" />
            <div className="deliveries extra_charge_items">
                <div className="receipt_item">
                    <p>Delivery Charge</p>
                    <p>₹ {deliveryCharge}</p>
                </div>
                <div className="receipt_item">
                    <p>tax</p>
                    <p>₹ {tax}</p>
                </div>
                <div className="receipt_item green_item">
                    <p>Coupon Reduction</p>
                    <p>₹ {couponReduction}</p>
                </div>
            </div>
            <hr />
            <div className="receipt_item ">
                <h3>Total</h3>
                <h3>₹ {total}</h3>
            </div>
        </div>
    );
};

export default Receipt;
