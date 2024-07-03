import React, { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import MenuIcon from "@mui/icons-material/Menu";
import orderIcon from "../assets/order.svg";
import notificationIcon from "../assets/notification.svg";
import profileIcon from "../assets/profile.svg";
import homeIcon from "../assets/home.svg";
import { useNavigate } from "react-router-dom";

const actions = [
    { icon: <img src={homeIcon} style={{ width: "22px" }} alt="" />, name: "home" },
    { icon: <img src={orderIcon} style={{ width: "22px" }} alt="" />, name: "orders" },
    { icon: <img src={notificationIcon} style={{ width: "22px" }} alt="" />, name: "notification" },
    { icon: <img src={profileIcon} style={{ width: "22px" }} alt="" />, name: "profile" },
];

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleNav = (name) => {
        handleClose();
        navigate(`/${name}`);
    };
    return (
        <Box className="navbar" sx={{ transform: "translateZ(0px)" }}>
            <SpeedDial
                className="nav_btn"
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<MenuIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction="down"
                FabProps={{
                    sx: {
                        bgcolor: "#1FACF3", // change this to your desired background color
                        "&:hover": {
                            bgcolor: "#007ebc", // change this to your desired hover color
                        },
                    },
                }}
            >
                {actions?.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleNav(action.name)}
                        sx={{
                            bgcolor: "#1FACF3",
                            transition: ".2s ease",
                            "&:hover": {
                                scale: "1.2",
                                bgcolor: "#007ebc", // change this to your desired hover background color
                            },
                        }}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
};
export default Navbar;
