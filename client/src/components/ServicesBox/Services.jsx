import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allServices } from "../../Actions/actions";
import { setServices } from "../../Redux/reducers/services";
import { setService } from "../../Redux/reducers/cart";
import { authentication } from "../../Actions/auth";
import { enqueueSnackbar } from "notistack";

const Services = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { services } = useSelector((state) => state.services);

    const fetchServices = async () => {
        const response = await allServices();
        dispatch(setServices(response.data));
    };
    const handleService = async (item) => {
        const response = await authentication();
        if (response.error) {
            localStorage.removeItem("token");
            localStorage.removeItem("data");
            enqueueSnackbar(response.message, { variant: "info" });
            return;
        } else {
            dispatch(setService(item));
            navigate("/cart");
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <div className="services">
            {services.map((item, index) => (
                <div onClick={() => handleService(item)} className="service" key={index}>
                    <img src={item.serviceImage} alt="image" />
                    <h2>{item.service}</h2>
                </div>
            ))}
        </div>
    );
};

export default Services;
