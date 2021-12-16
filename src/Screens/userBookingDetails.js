import "../Css/cart.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useEffect, useState } from "react";
import {
  auth,
  onAuthStateChanged,
} from "../config/Firebase/Firebase";
import { useSelector } from "react-redux";

const UserBookingDetails = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

 
  const bookingDetailState = useSelector((state) => state.getBookingData);
  const { dbData } = bookingDetailState;


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <div className="cart-main-container">
        <div className="header">
          <div className="back-arrow-div">
            <Link to="/" style={{ color: "black" }}>
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
            <h3>Your Booking Details</h3>
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
              value={"Room Name" + " : " + dbData.roomName}
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
              value={"Room Service" + " : " + dbData.roomService}
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
              value={"Room Booked" + " : " + dbData.roomsWant}
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
              value={"Per Day Price" + " : " + "$" +dbData.perDayPrice}
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
              value={"Name" + " : " + dbData.name}
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
              value={"Contact Number" + " : " + dbData.contactNumber}
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
              value={"Email" + " : " + dbData.email}
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
              value={"CNIC" + " : " + dbData.cnic}
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
              value={"No Of Persons" + " : " + dbData.noOfPersons}
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
              value={"No Of Days" + " : " + dbData.noOfDays}
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
              value={"Address" + " : " + dbData.address}
            />
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default UserBookingDetails;
