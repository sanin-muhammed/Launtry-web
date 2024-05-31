import "./style.css";
import { authentication } from "../../Actions/auth";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import leftArrow from "../../assets/arrow-left.png";

const Washing = () => {
    const navigate = useNavigate()

    const checkToken = async ()=>{
        const response = await authentication();
        if(response.error){
            navigate('/home');
            enqueueSnackbar(response.message, { variant: "info" });
            return
        }

    }
    checkToken()
    return (
        <div className="washing_container">
            <Link className="skip_btn" to="/home">
                <img src={leftArrow} alt="" />
            </Link>
            <h1>Washing</h1>
        </div>
    );
};

export default Washing;
