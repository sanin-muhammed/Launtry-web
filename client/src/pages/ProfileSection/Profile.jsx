import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import frame2 from "../../assets/Frame2.png";
import user_img from "../../assets/user_img.png";
import editSvg from "../../assets/edit-2 copy.svg";
import historySvg from "../../assets/history.svg";
import messageSvg from "../../assets/message.svg";
import addressSvg from "../../assets/buildings.svg";
import dashboardSvg from "../../assets/dashboard_icon.svg";
import FAQSvg from "../../assets/FAQ_icon.svg";
import aboutUsSvg from "../../assets/about_us_icon.svg";
import reviewsSvg from "../../assets/reviews_icon.svg";
import privacySvg from "../../assets/privacy_icon.svg";
import arrow from "../../assets/arrow.svg";

import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/reducers/user";
import ContactUs from "./ContactUs";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [openChat, setOpenChat] = useState(false);
  const toggleChat = () => {
    setOpenChat(!openChat);
  };

  const checkUser = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    dispatch(setUser(data));
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="profile_container">
      <img
        src={frame2}
        className="frame"
        alt="background img"
      />

      <div className="profile_section">
        <header>
          <h1>Profile</h1>
          <div>
            <Navbar profile={true} />
          </div>
        </header>
        <div className="profile_div">
          <div className="profile_image">
            <img
              src={user_img}
              alt="user image"
            />
          </div>

          <div className="user_detail">
            <h2>{user.username}</h2>
            <p>+91 {user.emailOrPhone}</p>
            <p className="edit_profile">
              Edit profile
              <img
                src={editSvg}
                alt=""
              />
            </p>
          </div>
        </div>
        <div className="btns_div">
          <div className="btn">
            <img
              src={historySvg}
              alt=""
            />
            History
          </div>
          <div
            className="btn"
            onClick={() => setOpenChat(true)}
          >
            <img
              src={messageSvg}
              alt=""
            />
            Contact us
          </div>
        </div>
      </div>
      <div className="profile_contents_div">
        <div className="profile_contents">
          <div className="item">
            <div>
              <img
                src={dashboardSvg}
                alt=""
              />
              <p>Dashboard</p>
            </div>
            <img
              src={arrow}
              alt=""
              className="arrow_img"
            />
          </div>
          <div className="item">
            <div>
              <img
                src={addressSvg}
                alt=""
              />
              <p>Address</p>
            </div>
            <img
              src={arrow}
              alt=""
              className="arrow_img"
            />
          </div>
          <div className="item">
            <div>
              <img
                src={FAQSvg}
                alt=""
              />
              <p>FAQ</p>
            </div>
            <img
              src={arrow}
              alt=""
              className="arrow_img"
            />
          </div>
          <div className="item">
            <div>
              <img
                src={aboutUsSvg}
                alt=""
              />
              <p>About Us</p>
            </div>
            <img
              src={arrow}
              alt=""
              className="arrow_img"
            />
          </div>
          <div className="item">
            <div>
              <img
                src={reviewsSvg}
                alt=""
              />
              <p>Reviews</p>
            </div>
            <img
              src={arrow}
              alt=""
              className="arrow_img"
            />
          </div>
          <div className="item">
            <div>
              <img
                src={privacySvg}
                alt=""
              />
              <p>Privacy policy</p>
            </div>
            <img
              src={arrow}
              alt=""
              className="arrow_img"
            />
          </div>
        </div>
      </div>
      <ContactUs
        open={openChat}
        setOpen={setOpenChat}
        toggle={toggleChat}
      />
    </div>
  );
};

export default Profile;
