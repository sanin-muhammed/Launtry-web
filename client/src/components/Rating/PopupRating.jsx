import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { checkRatingExist } from "../../Actions/ratingActions";

const PopupRating = () => {
    const { user } = useSelector((state) => state.user);

    console.log("user =", user);

    const handleButton = () => {
        Swal.fire({
            title: "How satisfied were you with your experience",
            text: "You won't be able to revert this!",
            html: "<h1>sanin <h1>",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Submit",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    const handleCheckRating = async () => {
        const response = await checkRatingExist(user._id);

        if (response.status) {
            setTimeout(() => {
                handleButton();
            }, 5000);
        }
    };

    useEffect(() => {
        if (user) {
            handleCheckRating();
        }
    }, []);

    return <></>;
};

export default PopupRating;
