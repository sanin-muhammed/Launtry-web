import frame_img from "../../assets/Frame.png";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/arrow-left.png";
import successImg from "../../assets/Successmark.png";

import "./style.css";

const PasswordChanged = () => {
    return (
        <div className="loginPage_container authPage_container forgot_password_container password_changed_container">
            <Link className="skip_btn" to="/login">
                <img src={leftArrow} alt="" />
            </Link>
            <img src={successImg} className="successImg" alt="success image" />
            <h2 className="brand_name">Password Changed !</h2>
            <p>Your password has been changed successfully.</p>
            <form>
                <Link className="auth_btn" to="/login" style={{ background: "#fff", color: "#1facf3" }}>
                    Back To Login
                </Link>
            </form>
            <img src={frame_img} className="frame_img" alt="frame_img" />
        </div>
    );
};

export default PasswordChanged;
