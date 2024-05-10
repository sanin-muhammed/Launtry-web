import frame_img from "../../assets/Frame.png";
import { Link, useNavigate } from "react-router-dom";
import leftArrow from "../../assets/arrow-left.png";
import "./style.css";
import { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP, verifyOtp } from "../../Actions/auth";
import { Alert } from "@mui/material";
import { setUserId } from "../../Redux/reducers/userId";
import { enqueueSnackbar } from "notistack";

const OtpVerification = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const userId = useSelector((state) => state.userId);
    const [errorMsg, setErrorMsg] = useState("");
    const [otp, setOtp] = useState("");
    console.log({ otp });
    const handleChange = (newValue) => {
        setOtp(newValue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            userId: userId,
            otp: otp,
        };
        console.log("form data =", formData);
        const response = await verifyOtp(formData);
        if (response.status) {
            navigate("/new_password");
            enqueueSnackbar("OTP Verified !", { variant: "success" });
        } else if (response.error) {
            setErrorMsg(response.message);
        }
    };
    const handleResendOTP = async () => {
        const formData = {
            userId: userId,
        };
        const response = await sendOTP(formData);
        console.log("response", response);
        if (response.status) {
            dispatch(setUserId(response.data.userId));
            enqueueSnackbar("OTP resended !", { variant: "info" });
        } else if (response.error) {
            setErrorMsg(response.message);
        }
    };

    return (
        <div className="loginPage_container authPage_container forgot_password_container">
            <Link className="skip_btn" to="/login">
                <img src={leftArrow} alt="" />
            </Link>
            <h2 className="brand_name">OTP Verification </h2>
            <p>Enter the verification code we just sent on your email address.</p>
            <form onSubmit={handleSubmit}>
                {errorMsg && (
                    <Alert className="error_msg" variant="outlined" severity="error">
                        {errorMsg}
                    </Alert>
                )}
                <MuiOtpInput className="otp_input" value={otp} onChange={handleChange} />
                <button className="auth_btn" style={{ background: "#fff", color: "#1facf3" }}>
                    Verify
                </button>
            </form>
            <p className="links">
                Didn’t received code?
                <span className="forgot_password link" onClick={handleResendOTP}>
                        RESEND OTP
                    </span>
            </p>
            <img src={frame_img} className="frame_img" alt="frame_img" />
        </div>
    );
};

export default OtpVerification;
