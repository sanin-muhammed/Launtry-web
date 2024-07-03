import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import RatingDrawer from "./RatingDrawer";

const OrderList = () => {
    const { orders } = useSelector((state) => state.orders);

    const [bool, setBool] = useState(false);

    return (
        <>
            <div className="orders">
                {orders.map((item, index) => (
                    <div className="order" key={index}>
                        <div className="img_side">
                            <div className="img_div">
                                <img src={item.serviceDetails.serviceImage} alt="" />
                            </div>
                            <div className="date_div">
                                <h4>{item.createdDate}</h4>
                                <p>$499</p>
                            </div>
                        </div>
                        <div className="detail_side">
                            <div className="detail_head">
                                <h3>{item.serviceDetails.service}</h3>
                                <p className={item.orderStatus === "Out for delivery" ? "green_status" : item.orderStatus === "Cancelled" ? "red_status" : "yellow_status"}>{item.orderStatus === "Out for delivery" ? "Completed" : item.orderStatus === "Cancelled" ? "Cancelled" : "On-going"}</p>
                            </div>
                            <div className="product_items">
                                {item.products.slice(0, 3).map((item, index) => (
                                    <div className="" key={index}>
                                        <p>{item.product}</p>
                                        <p>X{item.count}</p>
                                    </div>
                                ))}
                                {item.products.length - 3 > 0 ? <p id="more">+ {item.products.length - 3} items</p> : <p>&nbsp;</p>}
                            </div>
                            <div className="buttons">
                                <button>Details</button>
                                {item.orderStatus === "Out for delivery" ? <button onClick={() => setBool(true)}>Add Rating</button> : item.orderStatus === "Cancelled" ? "" : <button>Tracking</button>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <RatingDrawer setBool={setBool} bool={bool} />
        </>
    );
};

export default OrderList;
