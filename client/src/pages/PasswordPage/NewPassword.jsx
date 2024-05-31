import frame_img from "../../assets/Frame.png";
import { Link, useNavigate } from "react-router-dom";
import leftArrow from "../../assets/arrow-left.png";
import "./style.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Alert } from "@mui/material";
import { createPassword } from "../../Actions/auth";
import {  useSnackbar } from "notistack";

const NewPassword = () => {
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();
    const {userId} = useSelector((state) => state.userId);
    const [errorMsg, setErrorMsg] = useState("");
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
        userId: userId,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrorMsg("");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); 
        const { password, confirmPassword } = formData;
        if (!password) {
            setErrorMsg("enter password");
            return;
        } else if (!confirmPassword) {
            setErrorMsg("enter confirm password");
            return;
        } else if (password !== confirmPassword) {
            setErrorMsg("passwords not match");
            return;
        }
        const response = await createPassword(formData);
        console.log("response", response);
        if (response.status) {
            enqueueSnackbar(response.message, { variant:"success" });
            navigate("/password_changed");
        } else if (response.error) {
            setErrorMsg(response.message);
        }
    };

    return (
        <div className="loginPage_container authPage_container forgot_password_container">
            <Link className="skip_btn" to="/forgot_password">
                <img src={leftArrow} alt="" />
            </Link>
            <h2 className="brand_name">Create New Password</h2>
            <p>Your new password must be unique from those previously used.</p>
            <form onSubmit={handleSubmit}>
                {errorMsg && (
                    <Alert className="error_msg" variant="outlined" severity="error">
                        {errorMsg}
                    </Alert>
                )}
                <input type="password" name="password" placeholder="Enter new password" onChange={handleInputChange} />
                <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleInputChange} />
                <button className="auth_btn" style={{ background: "#fff", color: "#1facf3" }}>
                    Reset Password
                </button>
            </form>
            <p className="links">
                Didn’t received code?
                <Link className="forgot_password link" to="/login">
                    Resend
                </Link>
            </p>
            <img src={frame_img} className="frame_img" alt="frame_img" />
        </div>
    );
};

export default NewPassword;
