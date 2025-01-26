import React, { useEffect } from "react";
import offerIcon from "../../assets/Vector.svg";
import { useDispatch, useSelector } from "react-redux";
import { allOffers } from "../../Actions/actions";
import { setOffers } from "../../Redux/reducers/offers";

const OfferDiv = () => {
    const { offers } = useSelector((state) => state.offers);
    const dispatch = useDispatch();

    const fetchOffer = async () => {
        const response = await allOffers();
        dispatch(setOffers(response.data));
    };

    useEffect(() => {
        fetchOffer();
    }, []);
    return (
        <div className="offer_div">
            <div className="offer_header">
                <img src={offerIcon} alt="icon" />
                <h1>Offers</h1>
            </div>
            <div className="offers">
                {offers?.map((item, index) => (
                    <div className="offer" key={index}>
                        <p>{item?.offer}</p>
                        <h1>₹ {item?.price}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferDiv;
