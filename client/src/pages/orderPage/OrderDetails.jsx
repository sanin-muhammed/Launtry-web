import leftArrow from "../../assets/arrow-left.svg";
import React from "react";
import { useSelector } from "react-redux";
import bellSvg from "../../assets/blue_notification.svg";
import calendarSvg from "../../assets/calendar.svg";
import clockSvg from "../../assets/clock.svg";

const OrderDetails = () => {
    const { order } = useSelector((state) => state.orders);

    console.log("order == ", order);

    return (
        <div className=" order_details_container">
            <div className="skip_btn " onClick={() => navigate(-1)}>
                <img src={leftArrow} alt="" />
            </div>
            <div className="top_div">
                <h1 className="heading">Id: {order.orderId}</h1>
            </div>
            <div className="pickupdate_container">
                <h3>Status</h3>
                <div className="coupon_div">
                    <div className="status_notification">
                        <img src={bellSvg} alt="" />
                        <p>Booking Accepted</p>
                    </div>
                </div>
            </div>
            <div className="two_components">
                <div className="pickupdate_container">
                    <h3>Pickup</h3>
                    <div className="">
                        <p>{order.pickupAddressDetails.address}</p>
                        <p>+91 {order.pickupAddressDetails.phoneNumber}</p>
                        <div className="date_and_btn">
                            <div className="date_div">
                                <div className="date">
                                    <img src={calendarSvg} alt="" />
                                    <p>{order.pickupDate.date}</p>
                                </div>
                                <div className="time">
                                    <img src={clockSvg} alt="" />
                                    <p>{order.createdDate}</p>
                                </div>
                            </div>
                            <div className="btn_div">
                                <button>Reschedule</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pickupdate_container">
                    <h3>Delivery {order.expressDelivery && "(Express)"}</h3>
                    <div className="coupon_div">
                        <div className="status_notification">
                            <img src={bellSvg} alt="" />
                            <p>Booking Accepted</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
