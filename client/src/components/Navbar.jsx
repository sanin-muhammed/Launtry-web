import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../Redux/reducers/user";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";

const Navbar = ({ profile }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("data");
        dispatch(setUser(null));
        navigate('/home')
        enqueueSnackbar("logout success", { variant: "success" });
    };
    return (
        <div className="navbar">
            <NavLink activeClassName="active" className="nav_link" to="/home">
                Home
            </NavLink>
            <NavLink activeClassName="active" className="nav_link" to="/orders">
                Orders
            </NavLink>
            <NavLink activeClassName="active" className="nav_link" to="/notifications">
                Notifications
            </NavLink>
            <NavLink activeClassName="active" className="nav_link" to="/profile">
                Profile
            </NavLink>
            {profile && (
                <button onClick={handleLogout} className="login_btn">
                    Logout
                </button>
            )}
        </div>
    );
};

export default Navbar;
