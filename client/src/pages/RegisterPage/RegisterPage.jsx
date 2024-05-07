import frame_img from "../../assets/Frame.png";
import { Link } from "react-router-dom";
import leftArrow from '../../assets/arrow-left.png'

const RegisterPage = () => {
    return (
        <div className="loginPage_container authPage_container">
                    <Link className="skip_btn" to="/authPage">
                        <img src={leftArrow} alt="" />
                    </Link>

            <h2 className="brand_name">Hey There ! Welcome</h2>
            <form>
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email ID or Phone Number" />
                <input type="password" placeholder="Enter your password" />
                <input type="password" placeholder="Confirm password" />
                <Link className="auth_btn" to="/home" style={{ background: "#fff", color: "#1facf3" }}>
                    Register
                </Link>

                <p>
                    Already have an account?
                    <Link className="forgot_password" to="/login">
                        Log In
                    </Link>
                </p>
            </form>
            <img src={frame_img} className="frame_img" alt="frame_img" />
        </div>
    );
};

export default RegisterPage;
