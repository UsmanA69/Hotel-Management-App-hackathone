import "../Css/cart.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useEffect, useState } from "react";
import {
  auth,
  onAuthStateChanged,
  set,
  ref,
  database,
} from "../config/Firebase/Firebase";

const DetailConfirmation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const myState = useSelector((state) => state.sendDataToPayment);
  const { userData } = myState;

  const uidState = useSelector((state) => state.getUserUid);
  const { userUid } = uidState;
  
  
  const HotelSelectedState = useSelector((state) => state.getSelectedHotel);
  const { hotelData } = HotelSelectedState;

 
  let userInformation = userData;
  userInformation.hotelName = hotelData.hotelName;
  userInformation.hotelService = hotelData.hotelService;
  userInformation.numOfRooms = hotelData.numOfRooms;
  userInformation.perDayPrice = hotelData.perDayPrice;


  const navigate = useNavigate();

  const handleCompletion = () => {

    set(ref(database, "users/" + userUid), userInformation);

    navigate("/completed")
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        navigate("/login")
      }
    });
  }, []);

  return (
    <>
      <div className="cart-main-container">
        <div className="header">
          <div className="back-arrow-div">
            <Link to="/info" style={{ color: "black" }}>
              <ArrowBackIcon className="arrow-icon" />
            </Link>
            <h5>Back </h5>
          </div>
          <div className="cart-icon-div">
            <FormatListBulletedIcon className="cart-icon" />
          </div>
        </div>
        <hr />

        <div className="body-div">
          <div className="heading-div">
            <h3>Confirm Your Details</h3>
          </div>
        </div>

        <div className="items-div">
          <div>
            <input
              style={{ textAlign: "center" }}
              disabled
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={"Hotel Name" + " : " + hotelData.hotelName}
            />
          </div>
          <br />
          <div>
            <input
              style={{ textAlign: "center" }}
              disabled
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={"Name" + " : " + userData.name}
            />
          </div>
          <br />
          <div>
            <input
              style={{ textAlign: "center" }}
              disabled
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={"Contact Number" + " : " + userData.contactNumber}
            />
          </div>
          <br />
          <div>
            <input
              style={{ textAlign: "center" }}
              disabled
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={"Email" + " : " + userData.email}
            />
          </div>
          <br />
          <div>
            <input
              style={{ textAlign: "center" }}
              disabled
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={"CNIC" + " : " + userData.cnic}
            />
          </div>
          <br />
          <div>
            <input
              style={{ textAlign: "center" }}
              disabled
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={"No Of Persons" + " : " + userData.noOfPersons}
            />
          </div>
          <br />
          <div>
            <input
              style={{ textAlign: "center" }}
              disabled
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={"No Of Days" + " : " + userData.noOfDays}
            />
          </div>
          <br />
          <div>
            <input
              style={{ textAlign: "center" }}
              disabled
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={"Address" + " : " + userData.address}
            />
          </div>
          <br />
          <div class="col-sm-12" style={{ textAlign: "center" }}>
            <button
              onClick={() => handleCompletion()}
              className="btn btn-primary"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailConfirmation;
