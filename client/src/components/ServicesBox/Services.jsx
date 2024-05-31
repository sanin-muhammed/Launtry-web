import React from "react";
import washImg from "../../assets/wash.svg";
import ironImg from "../../assets/iron.svg";
import wash_ironImg from "../../assets/wash&iron.svg";
import drycleanImg from "../../assets/dryclean.svg";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="services">
            <Link to='/washing' className="service" >
                <img src={washImg} alt="" />
                <h2>Washing</h2>
            </Link>
            <Link to='/washing' className="service" >
                <img src={ironImg} alt="" />
                <h2>Ironing</h2>
            </Link>
            <Link to='/washing' className="service" >
                <img src={wash_ironImg} alt="" />
                <h2>Wash & Iron</h2>
            </Link>
            <Link to='/washing' className="service" >
                <img src={drycleanImg} alt="" />
                <h2>Dry Clean</h2>
            </Link>
        </div>
    );
};

export default Services;
