import frame2 from "../../assets/Frame2.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import OfferSlider from "../../components/Offers/OfferSlider";
import OfferDiv from "../../components/Offers/OfferDiv";
import Services from "../../components/ServicesBox/Services";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { setUser } from "../../Redux/reducers/user";
import "./style.css";
import Navbar from "../../components/Navbar";

const Home = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("data");
        dispatch(setUser(null));
        enqueueSnackbar("logout success", { variant: "success" });
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("data"));
        dispatch(setUser(user));
    }, []);

    return (
        <div className="Home_container">
            <img src={frame2} className="frame2_img" alt="background img" />
            <header>
                <div className="nav">
                    {user?.username ? <h1>Hello {user.username}</h1> : <h1>Hello Customer</h1>}
                    {user ? (
                        <>
                            <Navbar />
                        </>
                    ) : (
                        <Link to="/authPage" className="login_btn">
                            Join
                        </Link>
                    )}
                </div>
            </header>
            <section>
                <OfferSlider />
                <OfferDiv />
                <Services />
            </section>
        </div>
    );
};

export default Home;
