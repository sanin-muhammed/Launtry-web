import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import frame2 from "../../assets/Frame2.png";
import user_img from "../../assets/user_img.png";
import editSvg from "../../assets/edit-2 copy.svg";
import historySvg from "../../assets/history.svg";
import messageSvg from "../../assets/message.svg";

import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/reducers/user";

const Profile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user);
    
    const checkUser = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        dispatch(setUser(data));

    };

    useEffect(() => {
        checkUser();
    }, []);

    return (
        <div className="profile_container">
            <img src={frame2} className="frame" alt="background img" />

            <div className="profile_section">
                <header>
                    <h1>Profile</h1>
                    <div>
                        <Navbar profile={true} />
                    </div>
                </header>
                <div className="profile_div">
                    <div className="profile_image">
                        <img src={user_img} alt="user image" />
                    </div>

                    <div className="user_detail">
                        <h2>{user.username}</h2>
                        <p>{user.emailOrPhone}</p>
                        <p className="edit_profile">
                            Edit profile
                            <img src={editSvg} alt="" />
                        </p>
                    </div>
                </div>
                <div className="btns_div">
                    <Link className="btn" to="history">
                        <img src={historySvg} alt="" />
                        History
                    </Link>
                    <Link className="btn" to="contactus">
                        <img src={messageSvg} alt="" />
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
