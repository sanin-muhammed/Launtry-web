import leftArrow from "../../assets/arrow-left.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPickups } from "../../Redux/reducers/pickups";
import { allPickups } from "../../Actions/actions";
import "./style.css";
import PickupPoint from "../../components/Summary/PickupPoint";
import PickupDate from "../../components/Summary/PickupDate";
import Coupon from "../../components/Summary/Coupon";
import Delivery from "../../components/Summary/Delivery";
import { allAddress } from "../../Actions/orderActions";
import OfferDiv from "../../components/Offers/OfferDiv";
import Receipt from "../../components/Summary/Receipt";
import ProductList from "../../components/Summary/ProductList";
import PaymentMethod from "../../components/Summary/PaymentMethod";

const Summary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [addresses, setAddresses] = useState([]);

    const fetchPickups = async () => {
        const response = await allPickups();
        if (response.status) {
            dispatch(setPickups(response.data));
        }
    };
    const fetchAddress = async () => {
        const response = await allAddress();
        if (response.status) {
            setAddresses(response.data);
        }
    };

    useEffect(() => {
        fetchPickups();
        fetchAddress();
    }, []);
    return (
        <div className="washing_container summary_container">
            <div className="skip_btn " onClick={() => navigate(-1)}>
                <img src={leftArrow} alt="" />
            </div>
            <div className="top_div">
                <h1 className="heading">Summary</h1>
            </div>
            <PickupPoint addresses={addresses} fetchAddress={fetchAddress} />
            <div className="two_components">
                <PickupDate />
                <Coupon />
            </div>
            <Delivery addresses={addresses} fetchAddress={fetchAddress} />
            <OfferDiv />

            <div className="two_components grid">
                <ProductList />
                <Receipt />
            </div>
                <PaymentMethod />
        </div>
    );
};

export default Summary;
