import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { all_banners } from "../../Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { setBanners } from "../../Redux/reducers/banners";
const OfferSlider = () => {
    const dispatch = useDispatch();

    const { banners } = useSelector((state) => state.banners);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const fetchBanner = async () => {
        const response = await all_banners();
        dispatch(setBanners(response.data));
    };

    useEffect(() => {
        fetchBanner();
    }, []);

    return (
        <Slider {...settings} className="slider">
            {banners.map((banner, index) => (
                <div className="slider_div" key={index}>
                    <img src={banner.bannerImage} className="offerImg" alt="" />
                </div>
            ))}
        </Slider>
    );
};

export default OfferSlider;
