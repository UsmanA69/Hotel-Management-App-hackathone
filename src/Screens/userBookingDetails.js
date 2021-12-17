import "../Css/cart.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useEffect, useState } from "react";
import {
  auth,
  onAuthStateChanged,
  onValue,
  ref,
  database,
  onChildAdded
} from "../config/Firebase/Firebase";

const UserBookingDetails = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [dbData, setDbData] = useState([]);


  
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const Uid = user.uid;
        // console.log("working");

        let arr = [];
        let refrence = ref(database, `users/${Uid}/BookedRoom`);

        onChildAdded(refrence, (snapshot) => {
          if(snapshot.exists()){
            arr.push(snapshot.val())
          }
          setDbData(arr);
        });

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
            <h3>Your Previous Booking Details</h3>
          </div>
        </div>

        {dbData.map((curElem) => {
          const {
            address,
            cnic,
            noOfDays,
            noOfPersons,
            perDayPrice,
            roomName,
            roomService,
            roomsWant,
          } = curElem;

          return (
            <div className="items-div">
              <div>
                <input
                  style={{ textAlign: "center" }}
                  disabled
                  type="text"
                  className="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  value={"Room Name" + " : " + roomName}
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
                  value={"Room Service" + " : " + roomService}
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
                  value={"Room Booked" + " : " + roomsWant}
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
                  value={"Per Day Price" + " : " + "$" + perDayPrice}
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
                  value={"Days Booked" + " : " + noOfDays}
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
                  value={"Number Of Persons" + " : " + noOfPersons}
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
                  value={"Address " + " : " + address}
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
                  value={"CNIC" + " : " + cnic}
                />
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserBookingDetails;
