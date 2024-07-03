import React, { useEffect, useState } from "react";
import { allOrders } from "../../Actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../Redux/reducers/orders";
import OrderList from "../../components/Orders/OrderList";
import "./style.css";
import Navbar from "../../components/Navbar";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Redux/reducers/user";
import { authentication } from "../../Actions/auth";

const Orders = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { user } = useSelector((state) => state.user);

    const [selectedSlot, setSelectedSlot] = useState("");
    console.log({ selectedSlot });
    const handleChangeSlot = (e) => {
        setSelectedSlot(e.target.value);
    };

    const checkUser = async () => {
        console.log(user);
        const response = await authentication();
        if (response.error) {
            navigate("/home");
            enqueueSnackbar(response.message, { variant: "info" });
            return;
        }
        if (!user._id) {
            navigate("/home");
            return;
        }
    };
    const fetchOrders = async () => {
        const response = await allOrders(user._id);
        if (response.status) {
            dispatch(setOrder(response.data));
        } else {
            enqueueSnackbar(response.message, { variant: "error" });
        }
    };
    useEffect(() => {
        checkUser();
        fetchOrders();
    }, []);
    return (
        <div className="order_container">
            <header>
                <h1>Orders</h1>
                <select className="select_box" value={selectedSlot} onChange={handleChangeSlot}>
                    <option className="option" value="All Orders">
                        All Orders
                    </option>
                    <option value="On-going">On-going</option>
                    <option value="Completed">Completed</option>
                </select>
                {/* <Navbar /> */}
            </header>
            <OrderList />
            
        </div>
    );
};

export default Orders;
