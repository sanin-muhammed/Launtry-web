import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };
import { useDispatch, useSelector } from "react-redux";
import { addDays, compareAsc, format } from "date-fns";

import "./style.css";
import { setDelivery } from "../../Redux/reducers/summary";

const Delivery = ({ addresses }) => {
    const dispatch = useDispatch();

    const { pickupDate } = useSelector((state) => state.summary);
    console.log({ pickupDate });
    const [checked, setChecked] = useState(true);
    const [formData, setFormData] = useState({
        delivery: "",
        expectedDelivery: "",
        expressDelivery: true,
    });
    console.log(formData);

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });

        if (name === "expressDelivery") {
            setChecked(checked);
        }
    };

    const calculateExpectedDeliveryDate = (dateString) => {
        const newDate = addDays(new Date(dateString), 2);
        const date = format(newDate, "dd-MMM-yyyy");
        setFormData({ ...formData, expectedDelivery: date });
        return date;
    };

    useEffect(() => {
        if (pickupDate.date) {
            calculateExpectedDeliveryDate(pickupDate.date);
        }
        if (formData.delivery) {
            dispatch(setDelivery(formData));
        }
    }, [pickupDate, formData.delivery]);
    return (
        <div className="delivery_container">
            <h3>Delivery</h3>
            <div className="deliveries">
                {addresses.map((item, index) => (
                    <div className="delivery" key={index}>
                        <input type="radio" value={item._id} name="delivery" onClick={handleInput} />
                        <label htmlFor="delivery">{item.address}</label>
                    </div>
                ))}
                {/* <div className="delivery">
                    <input type="radio" value="Collect from store" name="delivery" onClick={handleInput} />
                    <label htmlFor="delivery">Collect from store </label>
                </div> */}
                <p>
                    Expected Delivery : <span>{pickupDate.date ? formData.expectedDelivery : "In 2 days"}</span>
                </p>
                <div className="switch_div">
                    <h4>Express Delivery</h4>
                    <Switch {...label} checked={checked} value={!checked} name="expressDelivery" onChange={handleInput} color="info" />
                </div>
            </div>
        </div>
    );
};

export default Delivery;
