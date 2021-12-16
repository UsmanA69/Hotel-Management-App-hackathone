import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ref, database, onValue } from "../config/Firebase/Firebase";
import { GET_BOOKING_DETAILS } from "../config/Redux/Actions/actions";

const CompleteScreen = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const uidState = useSelector((state) => state.getUserUid);
  const { userUid } = uidState;

  const backToHome = () => {
    console.log("working");
    onValue(ref(database, "users/" + userUid), (snapshot) => {
      const dbData = snapshot.val();
      dispatch(GET_BOOKING_DETAILS(dbData));
    });
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Completed</h1>
      <button onClick={() => backToHome()}>Back To Home</button>
    </div>
  );
};

export default CompleteScreen;
