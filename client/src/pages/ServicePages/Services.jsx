import { authentication } from "../../Actions/auth";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import img from "../../assets/Group 1081.svg";
import leftArrow from "../../assets/arrow-left.svg";
import { useEffect, useState } from "react";
import Cart from "../../components/Orders/Cart";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

const Services = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {service} = useSelector((state)=> state.cart)
    
    const [serviceName,setServiceName] = useState("")

    const checkToken = async () => {
        const response = await authentication();
        if (response.error) {
            navigate("/home");
            enqueueSnackbar(response.message, { variant: "info" });
            return;
        }
    };
    const findServiceName = ()=>{
        setServiceName(service.service)
    }
    useEffect(() => {
        checkToken();
        findServiceName()
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
