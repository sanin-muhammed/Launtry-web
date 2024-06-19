import leftArrow from "../../assets/arrow-left.svg";
import "./style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Summary = () => {
    const navigate = useNavigate();

    return (
        <div className="washing_container instructions_container">
            <div className="skip_btn " onClick={() => navigate(-1)}>
                <img src={leftArrow} alt="" />
            </div>
            <div className="top_div">
                <h1 className="heading">Summary</h1>
            </div>
        </div>
    );
};

export default Summary;
