import { authentication } from "../../Actions/auth";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import img from "../../assets/Group 1081.svg";
import leftArrow from "../../assets/arrow-left.svg";
import { useEffect } from "react";
import "./style.css";
import Cart from "../../components/Orders/Cart";
import { setService } from "../../Redux/reducers/cart";
import { useDispatch } from "react-redux";

const Washing = ({ serviceType }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleservice = () => {
        dispatch(setService(serviceType));
    };
    const checkToken = async () => {
        const response = await authentication();
        if (response.error) {
            navigate("/home");
            enqueueSnackbar(response.message, { variant: "info" });
            return;
        }
    };
    useEffect(() => {
        handleservice();
        checkToken();
    }, []);
    return (
        <div className="washing_container">
            <Link className="skip_btn " to="/home">
                <img src={leftArrow} alt="" />
            </Link>
            <div className="top_div">
                <h1 className="heading">{serviceType}</h1>
                <img className="top_img" src={img} alt="" />
            </div>
            <Cart />
        </div>
    );
};

export default Washing;
