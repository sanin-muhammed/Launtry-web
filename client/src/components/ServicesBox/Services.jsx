import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allServices } from "../../Actions/actions";
import { setServices } from "../../Redux/reducers/services";
import { setService } from "../../Redux/reducers/cart";

const Services = () => {
    const { services } = useSelector((state) => state.services);
    const dispatch = useDispatch();

    const fetchServices = async () => {
        const response = await allServices();
        dispatch(setServices(response.data));
    };
    const handleService = (item) => {
        dispatch(setService(item));
    };

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <div className="services">
            {services.map((item, index) => (
                <Link to="/cart" onClick={() => handleService(item)} className="service" key={index}>
                    <img src={item.serviceImage} alt="image" />
                    <h2>{item.service}</h2>
                </Link>
            ))}
        </div>
    );
};

export default Services;
