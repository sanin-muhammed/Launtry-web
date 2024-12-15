import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { confirmOrder } from "../../Actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
const PaymentMethod = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user);
    const { cartList, service } = useSelector((state) => state.cart);
    const { instructions } = useSelector((state) => state.instructions);
    const { address, pickupDate, delivery, totalAmount } = useSelector((state) => state.summary);

    const [paymentMethod, setPaymentMethod] = useState("");
    const [open, setOpen] = useState(false);
    const handleClickOpen = (method) => {
        setPaymentMethod(method);
        console.log("userr==", user);
        console.log("instructions==", instructions);

        if (!user._id) {
            enqueueSnackbar("User information is missing", { variant: "error" });
            return;
        } else if (!service) {
            enqueueSnackbar("Service information is missing", { variant: "error" });
            return;
        } else if (!cartList.length) {
            enqueueSnackbar("products is missing", { variant: "error" });
            return;
        } else if (!address) {
            enqueueSnackbar("Pickup address is missing", { variant: "error" });
            return;
        } else if (!pickupDate.date || !pickupDate.slote) {
            enqueueSnackbar("Pickup date is missing", { variant: "error" });
            return;
        } else if (!delivery.delivery || !delivery.expectedDelivery) {
            enqueueSnackbar("Delivery information is missing", { variant: "error" });
            return;
        } else if (!totalAmount) {
            enqueueSnackbar("Total amount is missing", { variant: "error" });
            return;
        }

        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickPayment = async () => {
        const response = await confirmOrder({ userId: user._id, serviceId: service._id, products: cartList, instructions: instructions ? instructions : {}, pickupDate, pickupAddressId: address, deliveryAddressId: delivery.delivery, expectedDelivery: delivery.expectedDelivery, expressDelivery: delivery.expressDelivery, paymentMethod, totalAmount });
        if (response.status) {
            navigate("/booking_confirmed");
        } else {
            enqueueSnackbar(response.message, { variant: "error" });
        }
        setOpen(false);
    };

    return (
        <div className="payment_container">
            <h2>Payment method</h2>
            <div className="payment_methods">
                <div onClick={() => handleClickOpen("COD")}>
                    <img src="./COD.svg" className="cod_img" alt="dd" />
                    <p>COD</p>
                    <img src="./arrow.svg" alt="" />
                </div>
                <div>
                    <img src="./creditcard.svg" className="card_img" alt="dd" />
                    <p>Credit Card</p>
                    <img src="./arrow.svg" alt="" />
                </div>
                <div>
                    <img src="./UPI.svg" className="upi_img" alt="dd" />
                    <p>UPI</p>
                    <img src="./arrow.svg" alt="" />
                </div>
            </div>
            <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
                <DialogTitle>{"Are you sure you want to proceed with COD?"}</DialogTitle>
                <DialogContent>{/* <DialogContentText id="alert-dialog-slide-description">Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</DialogContentText> */}</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleClickPayment}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PaymentMethod;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
