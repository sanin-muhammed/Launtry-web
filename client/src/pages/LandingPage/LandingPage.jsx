import { Link } from "react-router-dom";
import logo from "../../assets/Group 1138.png";
import "./LandingPage.css";
const LandingPage = () => {
    return (
        <Link className="landingPage_container" to="/splash">
                <img src={logo} className="logo" alt="logo" />

                <h1 className="brand_name">Laundrybin</h1>
        </Link>
    );
};

export default LandingPage;
