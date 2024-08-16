import React, { useEffect, useState } from "react";
import { allOrders } from "../../Actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../../Redux/reducers/orders";
import OrderList from "../../components/Orders/OrderList";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Redux/reducers/user";
import { authentication } from "../../Actions/auth";
import "./style.css";
import Navbar from "../../components/Navbar";
import PopupRating from "../../components/Rating/PopupRating";

const Orders = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.user);
    const [selectedSlot, setSelectedSlot] = useState("");
    console.log({ selectedSlot });

    const handleChangeSlot = (e) => {
        setSelectedSlot(e.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("data");
        dispatch(setUser(null));
        // enqueueSnackbar("", { variant: "error" });
    };

    const fetchOrders = async () => {
        console.log("user id", user._id);
        const response = await allOrders(user._id);
        if (response.data.status) {
            dispatch(setOrders(response.data.data));
        }
        else if (response.status === 401) {
            handleLogout()
            navigate("/home");
            enqueueSnackbar(response.data.message, { variant: "error" });
        }
        console.log('errrr=',response);
        
        };
   
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            dispatch(setUser(data));
        } else {
            navigate("/home"); 
        }
    }, [dispatch, navigate]);

    useEffect(() => {
        if (user && user._id) {
            fetchOrders();
        }
    }, [user]);


    return (
        <div className="order_container">
            <header>
                <h1>Orders</h1>
                <div className="">
                    <Navbar />
                    <select className="select_box" value={selectedSlot} onChange={handleChangeSlot}>
                        <option className="option" value="All Orders">
                            All Orders
                        </option>
                        <option value="On-going">On-going</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </header>
            <OrderList />
            {/* <PopupRating/> */}
        </div>
    );
};

export default Orders;
