import "./style.css";
import frame2 from "../../assets/Frame2.png";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import OfferSlider from "../../components/Offers/OfferSlider";
import OfferDiv from "../../components/Offers/OfferDiv";
import Services from "../../components/ServicesBox/Services";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";

const Home = () => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("data");
        dispatch(setUser(null));
        enqueueSnackbar("logout success", { variant: "success" });
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("data"));
        setUser(user);
    }, []);

    return (
        <div className="Home_container">
            <img src={frame2} className="frame2_img" alt="background img" />
            <header>
                {user?.username ? <h1>Hello {user.username}</h1> : <h1>Hello Customer</h1>}
                {user ? (
                    <button onClick={handleLogout} className="login_btn">
                        Logout
                    </button>
                ) : (
                    <Link to="/authPage" className="login_btn">
                        Join
                    </Link>
                )}
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
