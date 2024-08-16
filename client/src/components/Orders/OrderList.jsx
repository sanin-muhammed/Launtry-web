import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../Redux/reducers/orders";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
        const { orders } = useSelector((state) => state.orders);

    const handleClickDetails = (item) => {
        console.log("item===", item);
        dispatch(setOrder(item))
        navigate('details')

    };

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
                                {/* <p>$499</p>   */}
                            </div>
                        </div>
                        <div className="detail_side">
                            <div className="detail_head">
                                <h3>{item.serviceDetails.service}</h3>
                                <p className={item.status === "Completed" ? "green_status" : item.status === "Cancelled" ? "red_status" : "yellow_status"}>{item.status}</p>
                            </div>
                            <div className="product_items">
                                {item.products.slice(0, 3).map((item, index) => (
                                    <div className="" key={index}>
                                        <p>{item.product}</p>
                                        <p>X{item.count}</p>
                                    </div>
                                ))}
                                {item.products.length - 3 > 0 ? <p id="more">+{item.products.length - 3} items</p> : <p>&nbsp;</p>}
                            </div>
                            <div className="buttons">
                                <button onClick={() => handleClickDetails(item)}>Details</button>
                                {item.status === "Completed" ? <button>Add Rating</button> : item.status === "On-going" ? <button>Tracking</button> : null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OrderList;
