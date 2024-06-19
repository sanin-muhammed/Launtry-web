import { Link, useNavigate } from "react-router-dom";
import leftArrow from "../../assets/arrow-left.svg";
import "./style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInstructions } from "../../Redux/reducers/instructions";
import { enqueueSnackbar } from "notistack";

const Instructions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [water, setWater] = useState("Hot");
    const [fabricSoftener, setFabricSoftener] = useState("No");
    const [detergent, setDetergent] = useState("Normel");
    const [note, setNote] = useState("");
    const handleSubmit = async () => {
        if (note) {
            dispatch(setInstructions({ water, fabricSoftener, detergent, note }));
            navigate("/summary");
        } else {
            enqueueSnackbar("please enter note", { variant: "error" });
        }
    };

    return (
        <div className="washing_container instructions_container">
            <div className="skip_btn " onClick={() => navigate(-1)}>
                <img src={leftArrow} alt="" />
            </div>
            <div className="top_div">
                <h1 className="heading">Instructions</h1>
            </div>
            <div className="instructions">
                <div className="instruction">
                    <h4>Water</h4>
                    <div className="buttons">
                        <div className={water === "Hot" ? "active" : "inactive"} onClick={() => setWater("Hot")}>
                            <svg width="40" height="40" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 20.5837C17.1881 20.5837 20.5833 17.1885 20.5833 13.0003C20.5833 8.81217 17.1881 5.41699 13 5.41699C8.8118 5.41699 5.41663 8.81217 5.41663 13.0003C5.41663 17.1885 8.8118 20.5837 13 20.5837Z" fill="currentColor" />
                                <path
                                    d="M13 24.873C12.4042 24.873 11.9167 24.4288 11.9167 23.833V23.7463C11.9167 23.1505 12.4042 22.663 13 22.663C13.5959 22.663 14.0834 23.1505 14.0834 23.7463C14.0834 24.3422 13.5959 24.873 13 24.873ZM20.735 21.818C20.4534 21.818 20.1825 21.7097 19.9659 21.5038L19.825 21.363C19.4025 20.9405 19.4025 20.258 19.825 19.8355C20.2475 19.413 20.93 19.413 21.3525 19.8355L21.4934 19.9763C21.9159 20.3988 21.9159 21.0813 21.4934 21.5038C21.2875 21.7097 21.0167 21.818 20.735 21.818ZM5.26504 21.818C4.98337 21.818 4.71254 21.7097 4.49587 21.5038C4.07337 21.0813 4.07337 20.3988 4.49587 19.9763L4.63671 19.8355C5.05921 19.413 5.74171 19.413 6.16421 19.8355C6.58671 20.258 6.58671 20.9405 6.16421 21.363L6.02337 21.5038C5.81754 21.7097 5.53587 21.818 5.26504 21.818ZM23.8334 14.083H23.7467C23.1509 14.083 22.6634 13.5955 22.6634 12.9997C22.6634 12.4038 23.1509 11.9163 23.7467 11.9163C24.3425 11.9163 24.8734 12.4038 24.8734 12.9997C24.8734 13.5955 24.4292 14.083 23.8334 14.083ZM2.25337 14.083H2.16671C1.57087 14.083 1.08337 13.5955 1.08337 12.9997C1.08337 12.4038 1.57087 11.9163 2.16671 11.9163C2.76254 11.9163 3.29337 12.4038 3.29337 12.9997C3.29337 13.5955 2.84921 14.083 2.25337 14.083ZM20.5942 6.48884C20.3125 6.48884 20.0417 6.38051 19.825 6.17467C19.4025 5.75217 19.4025 5.06967 19.825 4.64717L19.9659 4.50634C20.3884 4.08384 21.0709 4.08384 21.4934 4.50634C21.9159 4.92884 21.9159 5.61134 21.4934 6.03384L21.3525 6.17467C21.1467 6.38051 20.8759 6.48884 20.5942 6.48884ZM5.40587 6.48884C5.12421 6.48884 4.85337 6.38051 4.63671 6.17467L4.49587 6.02301C4.07337 5.60051 4.07337 4.91801 4.49587 4.49551C4.91837 4.07301 5.60087 4.07301 6.02337 4.49551L6.16421 4.63634C6.58671 5.05884 6.58671 5.74134 6.16421 6.16384C5.95837 6.38051 5.67671 6.48884 5.40587 6.48884ZM13 3.29301C12.4042 3.29301 11.9167 2.84884 11.9167 2.25301V2.16634C11.9167 1.57051 12.4042 1.08301 13 1.08301C13.5959 1.08301 14.0834 1.57051 14.0834 2.16634C14.0834 2.76217 13.5959 3.29301 13 3.29301Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <h5>Hot</h5>
                        </div>
                        <div className={water === "Cold" ? "active" : "inactive"} onClick={() => setWater("Cold")}>
                            <svg width="40" height="40" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8334 4.0625H12.1875V9.20833C12.1875 9.6525 12.5559 10.0208 13 10.0208C13.4442 10.0208 13.8125 9.6525 13.8125 9.20833V4.0625H15.1667C15.6109 4.0625 15.9792 3.69417 15.9792 3.25C15.9792 2.80583 15.6109 2.4375 15.1667 2.4375H10.8334C10.3892 2.4375 10.0209 2.80583 10.0209 3.25C10.0209 3.69417 10.3892 4.0625 10.8334 4.0625Z" fill="currentColor" />
                                <path d="M15.1667 21.9378H13.8125V16.792C13.8125 16.3478 13.4442 15.9795 13 15.9795C12.5559 15.9795 12.1875 16.3478 12.1875 16.792V21.9378H10.8334C10.3892 21.9378 10.0209 22.3062 10.0209 22.7503C10.0209 23.1945 10.3892 23.5628 10.8334 23.5628H15.1667C15.6109 23.5628 15.9792 23.1945 15.9792 22.7503C15.9792 22.3062 15.6109 21.9378 15.1667 21.9378Z" fill="currentColor" />
                                <path d="M3.06582 10.7032C3.19582 10.779 3.33665 10.8115 3.46665 10.8115C3.74832 10.8115 4.01915 10.6707 4.17082 10.3998L4.85332 9.22985L9.31665 11.8082C9.43582 11.884 9.57665 11.9165 9.71749 11.9165C9.99915 11.9165 10.27 11.7757 10.4217 11.5048C10.6492 11.1257 10.5083 10.6273 10.1292 10.3998L5.66582 7.82151L6.33749 6.65151C6.56499 6.26151 6.42415 5.76318 6.04499 5.54651C5.65499 5.31901 5.15665 5.44901 4.93999 5.83901L2.77332 9.58735C2.54582 9.98818 2.67582 10.4757 3.06582 10.7032Z" fill="currentColor" />
                                <path d="M22.9341 15.2966C22.5441 15.0691 22.0458 15.1991 21.8291 15.5891L21.1466 16.7591L16.6833 14.1916C16.2933 13.9641 15.795 14.1049 15.5783 14.4841C15.3508 14.8741 15.4917 15.3724 15.8708 15.5891L20.3233 18.1674L19.6516 19.3374C19.4241 19.7274 19.565 20.2258 19.9441 20.4424C20.0741 20.5183 20.215 20.5508 20.345 20.5508C20.6267 20.5508 20.8975 20.4099 21.0491 20.1391L23.2158 16.3908C23.4541 16.0116 23.3241 15.5241 22.9341 15.2966Z" fill="currentColor" />
                                <path d="M20.3342 7.82142L15.8709 10.3998C15.4809 10.6273 15.3509 11.1256 15.5784 11.5048C15.73 11.7648 16.0009 11.9164 16.2825 11.9164C16.4234 11.9164 16.5642 11.8839 16.6834 11.8081L21.1359 9.22976L21.8184 10.3998C21.97 10.6598 22.2409 10.8114 22.5225 10.8114C22.6634 10.8114 22.8042 10.7789 22.9234 10.7031C23.3134 10.4756 23.4434 9.97726 23.2159 9.59809L21.0492 5.84976C20.8217 5.45976 20.3234 5.32976 19.9442 5.55726C19.5542 5.78476 19.4242 6.28309 19.6517 6.66226L20.3342 7.82142Z" fill="currentColor" />
                                <path d="M5.66582 18.1786L10.1183 15.6003C10.5083 15.3728 10.6383 14.8744 10.4108 14.4953C10.1833 14.1053 9.68499 13.9753 9.30582 14.2028L4.85332 16.7811L4.17082 15.6111C3.94332 15.2211 3.44499 15.0911 3.06582 15.3186C2.67582 15.5461 2.54582 16.0444 2.77332 16.4236L4.93999 20.1719C5.09165 20.4319 5.36249 20.5836 5.64415 20.5836C5.78499 20.5836 5.92582 20.5511 6.04499 20.4753C6.43499 20.2478 6.56499 19.7494 6.33749 19.3703L5.66582 18.1786Z" fill="currentColor" />
                                <path d="M16.7917 12.9997C16.7917 13.693 16.6075 14.3322 16.2825 14.8955C15.6217 16.033 14.3975 16.7913 13 16.7913C11.6025 16.7913 10.3784 16.033 9.71754 14.8955C9.39254 14.3322 9.20837 13.693 9.20837 12.9997C9.20837 12.3063 9.39254 11.6672 9.71754 11.1038C10.3784 9.96634 11.6025 9.20801 13 9.20801C14.3975 9.20801 15.6217 9.96634 16.2825 11.1038C16.6075 11.6672 16.7917 12.3063 16.7917 12.9997Z" fill="currentColor" />
                            </svg>

                            <h5>Cold</h5>
                        </div>
                    </div>
                </div>
                <div className="instruction">
                    <h4>Fabric Softener</h4>
                    <div className="buttons">
                        <div className={fabricSoftener === "Yes" ? "active" : "inactive"} onClick={() => setFabricSoftener("Yes")}>
                            <svg width="40" height="40" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 20.5837C17.1881 20.5837 20.5833 17.1885 20.5833 13.0003C20.5833 8.81217 17.1881 5.41699 13 5.41699C8.8118 5.41699 5.41663 8.81217 5.41663 13.0003C5.41663 17.1885 8.8118 20.5837 13 20.5837Z" fill="currentColor" />
                                <path
                                    d="M13 24.873C12.4042 24.873 11.9167 24.4288 11.9167 23.833V23.7463C11.9167 23.1505 12.4042 22.663 13 22.663C13.5959 22.663 14.0834 23.1505 14.0834 23.7463C14.0834 24.3422 13.5959 24.873 13 24.873ZM20.735 21.818C20.4534 21.818 20.1825 21.7097 19.9659 21.5038L19.825 21.363C19.4025 20.9405 19.4025 20.258 19.825 19.8355C20.2475 19.413 20.93 19.413 21.3525 19.8355L21.4934 19.9763C21.9159 20.3988 21.9159 21.0813 21.4934 21.5038C21.2875 21.7097 21.0167 21.818 20.735 21.818ZM5.26504 21.818C4.98337 21.818 4.71254 21.7097 4.49587 21.5038C4.07337 21.0813 4.07337 20.3988 4.49587 19.9763L4.63671 19.8355C5.05921 19.413 5.74171 19.413 6.16421 19.8355C6.58671 20.258 6.58671 20.9405 6.16421 21.363L6.02337 21.5038C5.81754 21.7097 5.53587 21.818 5.26504 21.818ZM23.8334 14.083H23.7467C23.1509 14.083 22.6634 13.5955 22.6634 12.9997C22.6634 12.4038 23.1509 11.9163 23.7467 11.9163C24.3425 11.9163 24.8734 12.4038 24.8734 12.9997C24.8734 13.5955 24.4292 14.083 23.8334 14.083ZM2.25337 14.083H2.16671C1.57087 14.083 1.08337 13.5955 1.08337 12.9997C1.08337 12.4038 1.57087 11.9163 2.16671 11.9163C2.76254 11.9163 3.29337 12.4038 3.29337 12.9997C3.29337 13.5955 2.84921 14.083 2.25337 14.083ZM20.5942 6.48884C20.3125 6.48884 20.0417 6.38051 19.825 6.17467C19.4025 5.75217 19.4025 5.06967 19.825 4.64717L19.9659 4.50634C20.3884 4.08384 21.0709 4.08384 21.4934 4.50634C21.9159 4.92884 21.9159 5.61134 21.4934 6.03384L21.3525 6.17467C21.1467 6.38051 20.8759 6.48884 20.5942 6.48884ZM5.40587 6.48884C5.12421 6.48884 4.85337 6.38051 4.63671 6.17467L4.49587 6.02301C4.07337 5.60051 4.07337 4.91801 4.49587 4.49551C4.91837 4.07301 5.60087 4.07301 6.02337 4.49551L6.16421 4.63634C6.58671 5.05884 6.58671 5.74134 6.16421 6.16384C5.95837 6.38051 5.67671 6.48884 5.40587 6.48884ZM13 3.29301C12.4042 3.29301 11.9167 2.84884 11.9167 2.25301V2.16634C11.9167 1.57051 12.4042 1.08301 13 1.08301C13.5959 1.08301 14.0834 1.57051 14.0834 2.16634C14.0834 2.76217 13.5959 3.29301 13 3.29301Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <h5>Yes</h5>
                        </div>
                        <div className={fabricSoftener === "No" ? "active" : "inactive"} onClick={() => setFabricSoftener("No")}>
                            <svg width="40" height="40" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8334 4.0625H12.1875V9.20833C12.1875 9.6525 12.5559 10.0208 13 10.0208C13.4442 10.0208 13.8125 9.6525 13.8125 9.20833V4.0625H15.1667C15.6109 4.0625 15.9792 3.69417 15.9792 3.25C15.9792 2.80583 15.6109 2.4375 15.1667 2.4375H10.8334C10.3892 2.4375 10.0209 2.80583 10.0209 3.25C10.0209 3.69417 10.3892 4.0625 10.8334 4.0625Z" fill="currentColor" />
                                <path d="M15.1667 21.9378H13.8125V16.792C13.8125 16.3478 13.4442 15.9795 13 15.9795C12.5559 15.9795 12.1875 16.3478 12.1875 16.792V21.9378H10.8334C10.3892 21.9378 10.0209 22.3062 10.0209 22.7503C10.0209 23.1945 10.3892 23.5628 10.8334 23.5628H15.1667C15.6109 23.5628 15.9792 23.1945 15.9792 22.7503C15.9792 22.3062 15.6109 21.9378 15.1667 21.9378Z" fill="currentColor" />
                                <path d="M3.06582 10.7032C3.19582 10.779 3.33665 10.8115 3.46665 10.8115C3.74832 10.8115 4.01915 10.6707 4.17082 10.3998L4.85332 9.22985L9.31665 11.8082C9.43582 11.884 9.57665 11.9165 9.71749 11.9165C9.99915 11.9165 10.27 11.7757 10.4217 11.5048C10.6492 11.1257 10.5083 10.6273 10.1292 10.3998L5.66582 7.82151L6.33749 6.65151C6.56499 6.26151 6.42415 5.76318 6.04499 5.54651C5.65499 5.31901 5.15665 5.44901 4.93999 5.83901L2.77332 9.58735C2.54582 9.98818 2.67582 10.4757 3.06582 10.7032Z" fill="currentColor" />
                                <path d="M22.9341 15.2966C22.5441 15.0691 22.0458 15.1991 21.8291 15.5891L21.1466 16.7591L16.6833 14.1916C16.2933 13.9641 15.795 14.1049 15.5783 14.4841C15.3508 14.8741 15.4917 15.3724 15.8708 15.5891L20.3233 18.1674L19.6516 19.3374C19.4241 19.7274 19.565 20.2258 19.9441 20.4424C20.0741 20.5183 20.215 20.5508 20.345 20.5508C20.6267 20.5508 20.8975 20.4099 21.0491 20.1391L23.2158 16.3908C23.4541 16.0116 23.3241 15.5241 22.9341 15.2966Z" fill="currentColor" />
                                <path d="M20.3342 7.82142L15.8709 10.3998C15.4809 10.6273 15.3509 11.1256 15.5784 11.5048C15.73 11.7648 16.0009 11.9164 16.2825 11.9164C16.4234 11.9164 16.5642 11.8839 16.6834 11.8081L21.1359 9.22976L21.8184 10.3998C21.97 10.6598 22.2409 10.8114 22.5225 10.8114C22.6634 10.8114 22.8042 10.7789 22.9234 10.7031C23.3134 10.4756 23.4434 9.97726 23.2159 9.59809L21.0492 5.84976C20.8217 5.45976 20.3234 5.32976 19.9442 5.55726C19.5542 5.78476 19.4242 6.28309 19.6517 6.66226L20.3342 7.82142Z" fill="currentColor" />
                                <path d="M5.66582 18.1786L10.1183 15.6003C10.5083 15.3728 10.6383 14.8744 10.4108 14.4953C10.1833 14.1053 9.68499 13.9753 9.30582 14.2028L4.85332 16.7811L4.17082 15.6111C3.94332 15.2211 3.44499 15.0911 3.06582 15.3186C2.67582 15.5461 2.54582 16.0444 2.77332 16.4236L4.93999 20.1719C5.09165 20.4319 5.36249 20.5836 5.64415 20.5836C5.78499 20.5836 5.92582 20.5511 6.04499 20.4753C6.43499 20.2478 6.56499 19.7494 6.33749 19.3703L5.66582 18.1786Z" fill="currentColor" />
                                <path d="M16.7917 12.9997C16.7917 13.693 16.6075 14.3322 16.2825 14.8955C15.6217 16.033 14.3975 16.7913 13 16.7913C11.6025 16.7913 10.3784 16.033 9.71754 14.8955C9.39254 14.3322 9.20837 13.693 9.20837 12.9997C9.20837 12.3063 9.39254 11.6672 9.71754 11.1038C10.3784 9.96634 11.6025 9.20801 13 9.20801C14.3975 9.20801 15.6217 9.96634 16.2825 11.1038C16.6075 11.6672 16.7917 12.3063 16.7917 12.9997Z" fill="currentColor" />
                            </svg>

                            <h5>No</h5>
                        </div>
                    </div>
                </div>
                <div className="instruction">
                    <h4>Detergent</h4>
                    <div className="buttons">
                        <div className={detergent === "Scented" ? "active" : "inactive"} onClick={() => setDetergent("Scented")}>
                            <svg width="40" height="40" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 20.5837C17.1881 20.5837 20.5833 17.1885 20.5833 13.0003C20.5833 8.81217 17.1881 5.41699 13 5.41699C8.8118 5.41699 5.41663 8.81217 5.41663 13.0003C5.41663 17.1885 8.8118 20.5837 13 20.5837Z" fill="currentColor" />
                                <path
                                    d="M13 24.873C12.4042 24.873 11.9167 24.4288 11.9167 23.833V23.7463C11.9167 23.1505 12.4042 22.663 13 22.663C13.5959 22.663 14.0834 23.1505 14.0834 23.7463C14.0834 24.3422 13.5959 24.873 13 24.873ZM20.735 21.818C20.4534 21.818 20.1825 21.7097 19.9659 21.5038L19.825 21.363C19.4025 20.9405 19.4025 20.258 19.825 19.8355C20.2475 19.413 20.93 19.413 21.3525 19.8355L21.4934 19.9763C21.9159 20.3988 21.9159 21.0813 21.4934 21.5038C21.2875 21.7097 21.0167 21.818 20.735 21.818ZM5.26504 21.818C4.98337 21.818 4.71254 21.7097 4.49587 21.5038C4.07337 21.0813 4.07337 20.3988 4.49587 19.9763L4.63671 19.8355C5.05921 19.413 5.74171 19.413 6.16421 19.8355C6.58671 20.258 6.58671 20.9405 6.16421 21.363L6.02337 21.5038C5.81754 21.7097 5.53587 21.818 5.26504 21.818ZM23.8334 14.083H23.7467C23.1509 14.083 22.6634 13.5955 22.6634 12.9997C22.6634 12.4038 23.1509 11.9163 23.7467 11.9163C24.3425 11.9163 24.8734 12.4038 24.8734 12.9997C24.8734 13.5955 24.4292 14.083 23.8334 14.083ZM2.25337 14.083H2.16671C1.57087 14.083 1.08337 13.5955 1.08337 12.9997C1.08337 12.4038 1.57087 11.9163 2.16671 11.9163C2.76254 11.9163 3.29337 12.4038 3.29337 12.9997C3.29337 13.5955 2.84921 14.083 2.25337 14.083ZM20.5942 6.48884C20.3125 6.48884 20.0417 6.38051 19.825 6.17467C19.4025 5.75217 19.4025 5.06967 19.825 4.64717L19.9659 4.50634C20.3884 4.08384 21.0709 4.08384 21.4934 4.50634C21.9159 4.92884 21.9159 5.61134 21.4934 6.03384L21.3525 6.17467C21.1467 6.38051 20.8759 6.48884 20.5942 6.48884ZM5.40587 6.48884C5.12421 6.48884 4.85337 6.38051 4.63671 6.17467L4.49587 6.02301C4.07337 5.60051 4.07337 4.91801 4.49587 4.49551C4.91837 4.07301 5.60087 4.07301 6.02337 4.49551L6.16421 4.63634C6.58671 5.05884 6.58671 5.74134 6.16421 6.16384C5.95837 6.38051 5.67671 6.48884 5.40587 6.48884ZM13 3.29301C12.4042 3.29301 11.9167 2.84884 11.9167 2.25301V2.16634C11.9167 1.57051 12.4042 1.08301 13 1.08301C13.5959 1.08301 14.0834 1.57051 14.0834 2.16634C14.0834 2.76217 13.5959 3.29301 13 3.29301Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <h5>Scented</h5>
                        </div>
                        <div className={detergent === "Normel" ? "active" : "inactive"} onClick={() => setDetergent("Normel")}>
                            <svg width="40" height="40" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8334 4.0625H12.1875V9.20833C12.1875 9.6525 12.5559 10.0208 13 10.0208C13.4442 10.0208 13.8125 9.6525 13.8125 9.20833V4.0625H15.1667C15.6109 4.0625 15.9792 3.69417 15.9792 3.25C15.9792 2.80583 15.6109 2.4375 15.1667 2.4375H10.8334C10.3892 2.4375 10.0209 2.80583 10.0209 3.25C10.0209 3.69417 10.3892 4.0625 10.8334 4.0625Z" fill="currentColor" />
                                <path d="M15.1667 21.9378H13.8125V16.792C13.8125 16.3478 13.4442 15.9795 13 15.9795C12.5559 15.9795 12.1875 16.3478 12.1875 16.792V21.9378H10.8334C10.3892 21.9378 10.0209 22.3062 10.0209 22.7503C10.0209 23.1945 10.3892 23.5628 10.8334 23.5628H15.1667C15.6109 23.5628 15.9792 23.1945 15.9792 22.7503C15.9792 22.3062 15.6109 21.9378 15.1667 21.9378Z" fill="currentColor" />
                                <path d="M3.06582 10.7032C3.19582 10.779 3.33665 10.8115 3.46665 10.8115C3.74832 10.8115 4.01915 10.6707 4.17082 10.3998L4.85332 9.22985L9.31665 11.8082C9.43582 11.884 9.57665 11.9165 9.71749 11.9165C9.99915 11.9165 10.27 11.7757 10.4217 11.5048C10.6492 11.1257 10.5083 10.6273 10.1292 10.3998L5.66582 7.82151L6.33749 6.65151C6.56499 6.26151 6.42415 5.76318 6.04499 5.54651C5.65499 5.31901 5.15665 5.44901 4.93999 5.83901L2.77332 9.58735C2.54582 9.98818 2.67582 10.4757 3.06582 10.7032Z" fill="currentColor" />
                                <path d="M22.9341 15.2966C22.5441 15.0691 22.0458 15.1991 21.8291 15.5891L21.1466 16.7591L16.6833 14.1916C16.2933 13.9641 15.795 14.1049 15.5783 14.4841C15.3508 14.8741 15.4917 15.3724 15.8708 15.5891L20.3233 18.1674L19.6516 19.3374C19.4241 19.7274 19.565 20.2258 19.9441 20.4424C20.0741 20.5183 20.215 20.5508 20.345 20.5508C20.6267 20.5508 20.8975 20.4099 21.0491 20.1391L23.2158 16.3908C23.4541 16.0116 23.3241 15.5241 22.9341 15.2966Z" fill="currentColor" />
                                <path d="M20.3342 7.82142L15.8709 10.3998C15.4809 10.6273 15.3509 11.1256 15.5784 11.5048C15.73 11.7648 16.0009 11.9164 16.2825 11.9164C16.4234 11.9164 16.5642 11.8839 16.6834 11.8081L21.1359 9.22976L21.8184 10.3998C21.97 10.6598 22.2409 10.8114 22.5225 10.8114C22.6634 10.8114 22.8042 10.7789 22.9234 10.7031C23.3134 10.4756 23.4434 9.97726 23.2159 9.59809L21.0492 5.84976C20.8217 5.45976 20.3234 5.32976 19.9442 5.55726C19.5542 5.78476 19.4242 6.28309 19.6517 6.66226L20.3342 7.82142Z" fill="currentColor" />
                                <path d="M5.66582 18.1786L10.1183 15.6003C10.5083 15.3728 10.6383 14.8744 10.4108 14.4953C10.1833 14.1053 9.68499 13.9753 9.30582 14.2028L4.85332 16.7811L4.17082 15.6111C3.94332 15.2211 3.44499 15.0911 3.06582 15.3186C2.67582 15.5461 2.54582 16.0444 2.77332 16.4236L4.93999 20.1719C5.09165 20.4319 5.36249 20.5836 5.64415 20.5836C5.78499 20.5836 5.92582 20.5511 6.04499 20.4753C6.43499 20.2478 6.56499 19.7494 6.33749 19.3703L5.66582 18.1786Z" fill="currentColor" />
                                <path d="M16.7917 12.9997C16.7917 13.693 16.6075 14.3322 16.2825 14.8955C15.6217 16.033 14.3975 16.7913 13 16.7913C11.6025 16.7913 10.3784 16.033 9.71754 14.8955C9.39254 14.3322 9.20837 13.693 9.20837 12.9997C9.20837 12.3063 9.39254 11.6672 9.71754 11.1038C10.3784 9.96634 11.6025 9.20801 13 9.20801C14.3975 9.20801 15.6217 9.96634 16.2825 11.1038C16.6075 11.6672 16.7917 12.3063 16.7917 12.9997Z" fill="currentColor" />
                            </svg>

                            <h5>Normel</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="note_div">
                <textarea className="note" name="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter note here"></textarea>
            </div>
            <button className="nextBtn" onClick={handleSubmit}>
                Next
            </button>
        </div>
    );
};

export default Instructions;
