import { Box, Button, capitalize, Drawer } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/Group 1138.png";
import arrow from "../../assets/left_back_arrow.svg";
import call from "../../assets/call.svg";
import btnArrow from "../../assets/btn_arrow_left.svg";
import { GetMessages, SendMessage } from "../../Actions/chatAction";
import { enqueueSnackbar } from "notistack";
import { useSelector } from "react-redux";

const ContactUs = ({ open, setOpen, toggle }) => {
  const inputRef = useRef(null);
  const { user } = useSelector((state) => state.user);
  console.log("USER = ", user);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  console.log("MESSAGES = ", messages);
  const handleMsgSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      try {
        const response = await SendMessage({
          user: user?._id,
          admin: "6643487333995e69b6d1eb57",
          sender: "user",
          content: message,
        });
        if (response?.status) {
          enqueueSnackbar(response?.message, { variant: "success" });
          setMessage("");
          getAllMessages();
        } else if (response?.error) {
          enqueueSnackbar(response?.message, { variant: "error" });
        }
      } catch (error) {
        console.log("send msg error = ", error);
        enqueueSnackbar(error?.message, { variant: "error" });
      }
    }
  };

  const getAllMessages = async () => {
    try {
      const response = await GetMessages({
        user: user?._id,
        admin: "6643487333995e69b6d1eb57",
      });
      if (response?.status) {
        setMessages(response?.messages);
        // enqueueSnackbar(response?.message, { variant: "success" });
      } else if (response?.error) {
        enqueueSnackbar(response?.message, { variant: "error" });
      }
    } catch (error) {
      console.log("send msg error = ", error);
      enqueueSnackbar(error?.message, { variant: "error" });
    }
  };

  useEffect(() => {
    if (user?._id) {
      console.log("USER ID = ",user?._id)
      getAllMessages();
    }
  }, [user?._id]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 1000); // Adjust timing as needed
    }
  }, [open]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggle}
    >
      <Box
        sx={{
          width: 500,
        }}
        role="presentation"
      >
        <div className="chat_container">
          <header>
            <div className="logo_section">
              <img
                src={arrow}
                onClick={toggle}
                style={{ cursor: "pointer" }}
              />
              <div className="logo_div">
                <img
                  src={logo}
                  className="logo_img"
                />
                <h1 className="brand_name">Laundrybin</h1>
              </div>
            </div>
            <img
              src={call}
              className="call_img"
            />
          </header>
          <div className="chat_body">
            <p className="chat_date">Jan 1, 2024</p>
            <div className="admin_msg">
              <div className="mgs_logo">
                <img
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="msg_content">
                <p className="msg">Lorem Ipsum is simply dummy text of the printing and </p>
                <p className="msg_time">11:32 AM</p>
              </div>
            </div>
            <div className="my_msg">
              <div className="msg_content">
                <p className="msg">Lorem Ipsum is simply dummy text of the printing and</p>
                <p className="msg_time">11:33 AM</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleMsgSubmit}>
            <div className="chat_input">
              <div className="input_box">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Message...."
                  required
                  value={message}
                  onChange={(e) => setMessage(capitalize(e.target.value))}
                />
                <button
                  type="submit"
                  className="chat_btn"
                >
                  <img src={btnArrow} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </Box>
    </Drawer>
  );
};

export default ContactUs;
