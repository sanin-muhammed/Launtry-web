import logo from "../../assets/Group 1138.png";
import frame_img from "../../assets/Frame.png"
import "./AuthPage.css";
import { Link } from "react-router-dom";

const AuthPage = () => {
    return (
        <div className="authPage_container">
            <div className="brand">
                <img src={logo} className="brand_logo" alt="logo" />
                <h1 className="brand_name" style={{ color: "#fff" }}>Laundrybin</h1>
            </div>
            <div className="auth_buttons">
                <Link className="auth_btn" to="/login" style={{ background: "#fff",color:"#1facf3" }}>
                    Log In
                </Link>
                <Link className="auth_btn" to="/register">
                    Register
                </Link>
            </div>
            <img src={frame_img} className="frame_img" alt="frame_img" />
        </div>
    );
};

export default AuthPage;
