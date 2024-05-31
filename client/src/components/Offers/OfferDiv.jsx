import React from "react";
import offerIcon from "../../assets/Vector.svg";

const OfferDiv = () => {
    return (
        <div className="offer_div">
            <div className="offer_header">
                <img src={offerIcon} alt="icon" />
                <h1>Offers</h1>
            </div>
            <div className="offers">
                <div className="offer">
                    <p>Free delivery on every orders for 6 months</p>
                    <h1>₹ 499</h1>
                </div>
                <div className="offer">
                    <p>Free delivery on every orders for 6 months</p>
                    <h1>₹ 499</h1>
                </div>
                <div className="offer">
                    <p>Free delivery on every orders for 6 months</p>
                    <h1>₹ 499</h1>
                </div>
                <div className="offer">
                    <p>Free delivery on every orders for 6 months</p>
                    <h1>₹ 499</h1>
                </div>
                <div className="offer">
                    <p>Free delivery on every orders for 6 months</p>
                    <h1>₹ 499</h1>
                </div>
            </div>
        </div>
    );
};

export default OfferDiv;
