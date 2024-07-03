import frame2 from "../../assets/Frame2.png";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import OfferSlider from "../../components/Offers/OfferSlider";
import OfferDiv from "../../components/Offers/OfferDiv";
import Services from "../../components/ServicesBox/Services";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { setUser } from "../../Redux/reducers/user";
import Navbar from "../../components/Navbar";
import "./style.css";

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
                {user?.username ? <h1>Hello {user.username}</h1> : <h1>Hello Customer</h1>}
                <div>
                    {user ? (
                        <button onClick={handleLogout} className="login_btn">
                            Logout
                        </button>
                    ) : (
                        <Link to="/authPage" className="login_btn">
                            Join
                        </Link>
                    )}
                    <Navbar />
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
