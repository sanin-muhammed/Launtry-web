import frame_img from "../../assets/Frame.png";
import { Link, useNavigate } from "react-router-dom";
import leftArrow from "../../assets/arrow-left.png";
import "./style.css";
import { useState } from "react";
import { sendOTP } from "../../Actions/auth";
import { validateEmail, validatePhoneNumber } from "../../Actions/validation";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserId } from "../../Redux/reducers/userId";
import { useSnackbar } from "notistack";

const ForgotPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [errorMsg, setErrorMsg] = useState("");
    const [formData, setFormData] = useState({
        emailOrPhone: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const { emailOrPhone } = formData;
        if (!emailOrPhone) {
            setErrorMsg("enter email or phone");
            return;
        } else if (!validateEmail(emailOrPhone) && !validatePhoneNumber(emailOrPhone)) {
            setErrorMsg("Invalid email and phone number format");
            return;
        }
        const response = await sendOTP(formData);
        console.log("response", response);
        if (response.status) {
            dispatch(setUserId(response.data.userId));
            navigate("/verify_otp");
            enqueueSnackbar(response.message, { variant: "success" });
        }else if(response.error){
            setErrorMsg(response.message)
        }
    };
    return (
        <div className="loginPage_container authPage_container forgot_password_container">
            <Link className="skip_btn" to="/login">
                <img src={leftArrow} alt="" />
            </Link>
            <h2 className="brand_name">Forgot Password?</h2>
            <p>Don’t worry! It occurs. Please enter the email or phone number linked with your account.</p>
            <form onSubmit={handleSubmit}>
                {errorMsg && (
                    <Alert className="error_msg" variant="outlined" severity="error">
                        {errorMsg}
                    </Alert>
                )}
                <input type="text" name="emailOrPhone" placeholder="Enter Email ID or Phone Number" onChange={handleInputChange} />
                <button className="auth_btn" style={{ background: "#fff", color: "#1facf3" }}>
                    Send OTP
                </button>
            </form>
            <p className="links">
                Remember Password ?
                <Link className="forgot_password link" to="/login">
                    Log In
                </Link>
            </p>
            <img src={frame_img} className="frame_img" alt="frame_img" />
        </div>
    );
};

export default ForgotPassword;
