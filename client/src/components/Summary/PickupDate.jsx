import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import calendar from "../../assets/calendar.svg";
import "./style.css";
import { setPickupDate } from "../../Redux/reducers/summary";
const PickupDate = () => {
    const dispatch = useDispatch();

    const { pickups } = useSelector((state) => state.pickups);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedSlot, setSelectedSlot] = useState("");
    const [slotes, setSlotes] = useState([]);

    const handleChangeDate = (e) => {
        setSelectedDate(e.target.value);
        setSelectedSlot(""); // Reset selected slot when date changes
    };

    const handleChangeSlot = (e) => {
        setSelectedSlot(e.target.value);
    };

    const handleSlotes = () => {
        const selectedPickup = pickups.find((item) => item.date === selectedDate);
        setSlotes(selectedPickup?.slotes || []);
    };

    const setPickup = () => {
        dispatch(setPickupDate({ date: selectedDate, slote: selectedSlot }));
    };

    useEffect(() => {
        handleSlotes();
        setPickup();
    }, [selectedDate, selectedSlot]); 

    return (
        <div className="pickupdate_container">
            <h3>Pick Up</h3>
            <div className="select_div">
                <select className="select_box" value={selectedDate} onChange={handleChangeDate}>
                    <option value="" disabled>
                        DD-MM-YY
                    </option>
                    {pickups.map((item) => (
                        <option key={item.date} value={item.date}>
                            {item.date}
                        </option>
                    ))}
                </select>
                <select className="select_box" value={selectedSlot} onChange={handleChangeSlot} disabled={!slotes.length}>
                    <option className="option" value="" disabled>
                        Slot
                    </option>
                    {slotes.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default PickupDate;
