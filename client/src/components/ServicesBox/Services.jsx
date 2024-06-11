import React, { useEffect } from "react";
import washImg from "../../assets/wash.svg";
import ironImg from "../../assets/iron.svg";
import wash_ironImg from "../../assets/wash&iron.svg";
import drycleanImg from "../../assets/dryclean.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allServices } from "../../Actions/actions";
import { setServices } from "../../Redux/reducers/services";

const Services = () => {
    const { services } = useSelector((state) => state.services);
    const dispatch = useDispatch();

    const fetchService = async () => {
        const response = await allServices();
        dispatch(setServices(response.data));
    };

    useEffect(() => {
        fetchService();
    }, []);
    return (
        <div className="services">
            {services.map((item, index) => (
                <Link to={`/${item.service}`} className="service" key={index}>
                    <img src={item.serviceImage} alt="image" />
                    <h2>{item.service}</h2>
                </Link>
            ))}
        </div>
    );
};

export default Services;
