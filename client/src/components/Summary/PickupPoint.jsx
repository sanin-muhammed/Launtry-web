import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import editSvg from "../../assets/edit-2.svg";
import deleteSvg from "../../assets/trash.svg";
import { addAddress, allAddress, deleteAddress, editAddress } from "../../Actions/orderActions";
import { enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../Redux/reducers/summary";
const PickupPoint = ({ addresses, fetchAddress }) => {
    const dispatch = useDispatch();

    const { address } = useSelector((state) => state.summary);

    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);

    const [addressId, setAddressId] = useState("");
    const [formData, setFormData] = useState({
        destination: "",
        address: "",
        phoneNumber: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleEditClose = () => setEditOpen(false);
    const handleDeleteClose = () => setDeleteOpen(false);

    const handleCreateOpen = () => {
        setFormData({
            destination: "",
            address: "",
            phoneNumber: "",
        });
        setCreateOpen(true);
    };
    const handleCreateClose = () => setCreateOpen(false);

    const setId = (id) => {
        const findedItem = addresses.find((item) => item._id === id);
        console.log("finded =", findedItem);
        if (findedItem) {
            setAddressId(findedItem._id);
            const { destination, address, phoneNumber } = findedItem;
            setFormData({
                destination,
                address,
                phoneNumber,
            });
        } else {
            setAddressId("");
        }
    };
    const handleEditOpen = (id) => {
        setId(id);
        setEditOpen(true);
    };
    const handleDeleteOpen = (id) => {
        setId(id);
        setDeleteOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ formData });

        if (!formData.destination) {
            enqueueSnackbar("Enter Destination", { variant: "error" });
            return;
        } else if (!formData.address) {
            enqueueSnackbar("Enter Address", { variant: "error" });
            return;
        } else if (!formData.phoneNumber) {
            enqueueSnackbar("Enter Phone number", { variant: "error" });
            return;
        }

        const response = await addAddress(formData);
        if (response.status) {
            enqueueSnackbar(response.message, { variant: "success" });
            fetchAddress();
            setCreateOpen(false);
        } else if (response.error) {
            enqueueSnackbar(response.message, { variant: "error" });
            return;
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();

        const response = await editAddress(addressId, formData);
        if (response.status) {
            enqueueSnackbar(response.message, { variant: "success" });
            fetchAddress();
            setEditOpen(false);
        } else {
            enqueueSnackbar(response.message, { variant: "error" });
        }
    };

    const handleDelete = async () => {
        const response = await deleteAddress(addressId);
        if (response.status) {
            enqueueSnackbar(response.message, { variant: "success" });
            fetchAddress();
            setDeleteOpen(false);
        } else {
            enqueueSnackbar(response.message, { variant: "error" });
            setDeleteOpen(false);
        }
    };

    const handleSelectAddress = (id) => {
        dispatch(setAddress(id));
    };

    return (
        <div className="address">
            <div className="offer_div ">
                <div className="offer_header address_heading">
                    <h3>Pickup point</h3>
                    <TriggerButton className="create_btn" type="button" onClick={handleCreateOpen}>
                        <h1>+</h1>
                    </TriggerButton>
                </div>
                <div className="offers">
                    {addresses.length > 0 ? (
                        addresses.map((item, index) => (
                            <div className="offer select_address " id={address === item._id ? "set" : ""} key={index} onClick={() => handleSelectAddress(item._id)}>
                                <div className="address_heading">
                                    <h4>{item.destination}</h4>
                                    <div>
                                        <TriggerButton type="button" onClick={() => handleEditOpen(item._id)}>
                                            <img src={editSvg} alt="" />
                                        </TriggerButton>
                                        <TriggerButton type="button" onClick={() => handleDeleteOpen(item._id)}>
                                            <img src={deleteSvg} alt="" />
                                        </TriggerButton>
                                    </div>
                                </div>
                                <p>{item.address}</p>
                                <p>+91 {item.phoneNumber}</p>
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="offer">
                                <div className="address_heading">
                                    <h4></h4>
                                </div>
                                <p></p>
                                <p></p>
                                <br />
                            </div>
                            <div className="offer">
                                <div className="address_heading">
                                    <h4></h4>
                                </div>
                                <p></p>
                                <p></p>
                                <br />
                            </div>
                            <div className="offer">
                                <div className="address_heading">
                                    <h4></h4>
                                </div>
                                <p></p>
                                <p></p>
                                <br />
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* add address popup  */}
            <Modal aria-labelledby="unstyled-modal-title" aria-describedby="unstyled-modal-description" open={createOpen} onClose={handleCreateClose} slots={{ backdrop: StyledBackdrop }}>
                <ModalContent sx={{ width: 800 }}>
                    <h2 className="modal-title">Add Address</h2>
                    <form onSubmit={handleSubmit} id="unstyled-modal-description" className="address_form">
                        <label htmlFor="destination">Destination :</label>
                        <input type="text" name="destination" value={formData.destination} placeholder="Enter the Destination" onChange={handleInputChange} />
                        <label htmlFor="">Address :</label>
                        <input type="text" name="address" value={formData.address} placeholder="Enter the Address" onChange={handleInputChange} />
                        <label htmlFor="">Phone number :</label>
                        <input type="number" name="phoneNumber" value={formData.phoneNumber} placeholder="Enter the Phone number" onChange={handleInputChange} />
                        <button className="btn">Add</button>
                    </form>
                </ModalContent>
            </Modal>
            {/* edit address popup  */}
            <Modal aria-labelledby="unstyled-modal-title" aria-describedby="unstyled-modal-description" open={editOpen} onClose={handleEditClose} slots={{ backdrop: StyledBackdrop }}>
                <ModalContent sx={{ width: 800 }}>
                    <h2 className="modal-title">Edit Address</h2>
                    <form onSubmit={handleEdit} id="unstyled-modal-description" className="address_form">
                        <label htmlFor="destination">Destination :</label>
                        <input type="text" name="destination" value={formData.destination} placeholder="Enter the Destination" onChange={handleInputChange} />
                        <label htmlFor="address">Address :</label>
                        <input type="text" name="address" value={formData.address} placeholder="Enter the Address" onChange={handleInputChange} />
                        <label htmlFor="phoneNumber">Phone number :</label>
                        <input type="number" name="phoneNumber" value={formData.phoneNumber} placeholder="Enter the Phone number" onChange={handleInputChange} />
                        <button className="edit_btn">Edit</button>
                    </form>
                </ModalContent>
            </Modal>
            {/* delete address popup  */}
            <Modal aria-labelledby="unstyled-modal-title" aria-describedby="unstyled-modal-description" open={deleteOpen} onClose={handleDeleteClose} slots={{ backdrop: StyledBackdrop }}>
                <ModalContent sx={{ width: 450 }}>
                    <h2 id="unstyled-modal-title" className="modal-title">
                        Delete Address
                    </h2>
                    <p className=" modal-description">
                        Are you sure you want to delete this address?
                        <br />
                        <button className="delete_btn" onClick={handleDelete}>
                            Delete
                        </button>
                    </p>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default PickupPoint;

const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return <div className={clsx({ "base-Backdrop-open": open }, className)} ref={ref} {...other} />;
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

const blue = {
    200: "#99CCFF",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0066CC",
};

const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
};

const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
    ({ theme }) => css`
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 500;
        text-align: start;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow: hidden;
        background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border-radius: 8px;
        border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
        box-shadow: 0 4px 12px ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
        padding: 24px;
        color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

        & .modal-title {
            margin: 0;
            line-height: 1.5rem;
            margin-bottom: 8px;
        }

        & .modal-description {
            margin: 0;
            line-height: 1.5rem;
            font-weight: 400;
            color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
            margin-bottom: 4px;
        }
    `
);

const TriggerButton = styled("button")(
    ({ theme }) => css`
        line-height: 1.5;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms ease;
        cursor: pointer;
        border: none;
        background: transparent;

        &:hover {
            border-radius: 50%;
            scale: 1.05;
            background: ${theme.palette.mode === "dark" ? grey[1000] : grey[100]};
            border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
        }

        &:active {
            background: ${theme.palette.mode === "dark" ? grey[100] : grey[100]};
        }

        &:focus-visible {
            box-shadow: 0 0 0 4px ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
            outline: none;
        }
    `
);
