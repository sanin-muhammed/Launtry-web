import "./LoginPage.css";
import frame_img from "../../assets/Frame.png";
import { Link } from "react-router-dom";
import leftArrow from '../../assets/arrow-left.png'

const LoginPage = () => {
    return (
        <div className="loginPage_container authPage_container">
            <Link className="skip_btn" to="/authPage">
                        <img src={leftArrow} alt="" />
                    </Link>
            <h2 className="brand_name">Welcome back! Glad to see you, Again!</h2>
            <form>
                <input type="text" placeholder="Enter your email or Phone number" />
                <input type="password" placeholder="Enter your password" />
                <Link className="auth_btn" to="/login" style={{ background: "#fff", color: "#1facf3" }}>
                    Log In
                </Link>
                <Link className="forgot_password" to="/forgot_password">
                    Forgot Password?
                </Link>
                <p>
                Don’t have an account? 
                    <Link className="forgot_password" to="/register">
                    Register Now
                    </Link>
                </p>
            </form>
            <img src={frame_img} className="frame_img" alt="frame_img" />
        </div>
    );
};

export default LoginPage;
