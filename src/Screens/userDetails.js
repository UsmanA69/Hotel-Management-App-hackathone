import "../Css/cart.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItems from "../Components/cartItem";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Form from "../Components/form";
import { useEffect, useState } from "react";
import {
  auth,
  onAuthStateChanged,
  set,
  ref,
  database,
} from "../config/Firebase/Firebase";
import { CHECK_DATA_ON_SIGNUP } from "../config/Redux/Actions/actions";

const DetailConfirmation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const myState = useSelector((state) => state.sendDataToPayment);
  const { userData } = myState;

  const uidState = useSelector((state) => state.getUserUid);
  const { userUid } = uidState;
  console.log("use Uid "+ userUid );

 
  // console.log(userData);

  //   console.log(userData);

  //   const userUid = userCredential.user.uid;
  //onValue(ref(database, "users/" + Userid), (snapshot) => {
  //const data = snapshot.val();
  //console.log(data);
  //});

  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCompletion = () => {

    set(ref(database, "users/" + userUid), userData);

    navigate("/completed")
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //   let Userid = user.uid;
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
              value={"Contact Number" + " : " + userData.phoneNumber}
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

// (
//     <>
//       <div>
//         <input
//           style={{ textAlign: "center" }}
//           disabled
//           type="text"
//           className="form-control"
//           aria-label="Small"
//           aria-describedby="inputGroup-sizing-sm"
//           value={"Name" + " : " + userData.name}
//         />
//       </div>
//       <br />
//       <div>
//         <input
//           style={{ textAlign: "center" }}
//           disabled
//           type="text"
//           className="form-control"
//           aria-label="Small"
//           aria-describedby="inputGroup-sizing-sm"
//           value={"Contact Number" + " : " + userData.phoneNumber}
//         />
//       </div>
//       <br />
//       <div>
//         <input
//           style={{ textAlign: "center" }}
//           disabled
//           type="text"
//           className="form-control"
//           aria-label="Small"
//           aria-describedby="inputGroup-sizing-sm"
//           value={"CNIC" + " : " + userData.Cnic}
//         />
//       </div>
//       <br />
//       <div>
//         <input
//           style={{ textAlign: "center" }}
//           disabled
//           type="text"
//           className="form-control"
//           aria-label="Small"
//           aria-describedby="inputGroup-sizing-sm"
//           value={"No Of Persons" + " : " + userData.noOfPersons}
//         />
//       </div>
//       <br />
//       <div>
//         <input
//           style={{ textAlign: "center" }}
//           disabled
//           type="text"
//           className="form-control"
//           aria-label="Small"
//           aria-describedby="inputGroup-sizing-sm"
//           value={"No Of Days" + " : " + userData.noOfDays}
//         />
//       </div>
//     </>
//   )
