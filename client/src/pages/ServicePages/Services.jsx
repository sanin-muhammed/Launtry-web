import { Link } from "react-router-dom";
import img from "../../assets/Group 1081.svg";
import leftArrow from "../../assets/arrow-left.svg";
import { useEffect, useState } from "react";
import Cart from "../../components/Orders/Cart";
import { useSelector } from "react-redux";
import "./style.css";

const Services = () => {
    const { service } = useSelector((state) => state.cart);
    const [serviceName, setServiceName] = useState("");

    const findServiceName = () => {
        setServiceName(service.service);
    };

    useEffect(() => {
        findServiceName();
    }, []);
    return (
        <div className="washing_container">
            <Link className="skip_btn " to="/home">
                <img src={leftArrow} alt="" />
            </Link>
            <div className="top_div">
                <h1 className="heading">{serviceName}</h1>
                <img className="top_img" src={img} alt="" />
            </div>
            <Cart />
        </div>
    );
};

export default Services;
