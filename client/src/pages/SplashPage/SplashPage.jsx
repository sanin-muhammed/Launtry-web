import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./SplashPage.css";
import { Button } from "@mui/material";
import bottomImage from "../../assets/image 2.png";
import content_img from "../../assets/Group 1139.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SplashPage = () => {
    return (
        <div className="splash_container">
            <Link className="skip_btn" to="/home">
                Skip
            </Link>

            <div className="splash_contents">
                <img src={content_img} className="content_img" alt="content_img" />
                <div className="contents">
                    <h1 className="">Get your Laundry and Dry cleaning in 24 hours</h1>
                    <p>A convenient laundry solution that helps protect the enviornment</p>
                </div>
            </div>

            <img className="bottom_img" src={bottomImage} alt="bottomImage" />
            <Button className="arrow_btn" onClick={() => console.log(true)}>
                <ArrowForwardIcon />
            </Button>
        </div>
    );
};

export default SplashPage;
