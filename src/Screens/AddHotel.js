import "../Css/cart.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useState } from "react";
import { set, ref, database, storage } from "../config/Firebase/Firebase";
import {
  getDownloadURL,
  uploadBytesResumable,
  ref as sRef,
} from "firebase/storage";

const AddHotel = () => {
  const [hotelName, setHotelName] = useState();
  const [hotelService, setHotelService] = useState();
  const [numOfRooms, setNumOfRooms] = useState();
  const [perDayPrice, setPerDayPrice] = useState();
  const [hotelPicture, setHotelPicture] = useState("");
  const [pregress, setPregress] = useState(0);

  const navigate = useNavigate();

  const handlePictureSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadImage(file);
    navigate("/");
  };

  const uploadImage = (file) => {
    if (!file) return;
    const storageRef = sRef(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPregress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          setHotelPicture(url)
        );
      }
    );
  };

  let hotelData = {
    hotelName,
    hotelService,
    numOfRooms,
    perDayPrice,
    hotelPicture,
  };

  const handleSubmition = (e) => {
    e.preventDefault();
    let hotelId = Math.floor(Math.random() * Date.now());
    set(ref(database, "hotels/" + `Hotel ${hotelId}`), hotelData);
    console.log(hotelData);
  };

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
            <h3>Add Hotel Details</h3>
          </div>
        </div>

        <div className="items-div">
          <form onSubmit={(e) => handlePictureSubmit(e)}>
            <div class="col-md-8 col-lg-2">
              <label for="formFile" className="form-label">
                Hotel Picture
              </label>
              <input
                required
                className="form-control"
                type="file"
                id="formFile"
              />
              <button type="submit" className="btn btn-primary m-2">
                Submit {pregress}%{" "}
              </button>
            </div>
          </form>
          <form onSubmit={(e) => handleSubmition(e)}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Hotel Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="inputEmail4"
                  required
                  placeholder="Hotel Name"
                  onChange={(e) => setHotelName(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputEmail4">Hotel Service</label>
                <input
                  type="name"
                  className="form-control"
                  id="inputEmail4"
                  required
                  placeholder="Hotel Service"
                  onChange={(e) => setHotelService(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputEmail4">Number Of Rooms in Hotel</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputEmail4"
                  required
                  placeholder="Num Of Rooms"
                  onChange={(e) => setNumOfRooms(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputEmail4">Per Day Price</label>
                <input
                  type="name"
                  className="form-control"
                  id="inputEmail4"
                  required
                  placeholder="Per Day Price"
                  onChange={(e) => setPerDayPrice(e.target.value)}
                />
              </div>
            </div>

            <br />
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">
                  Proceed
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddHotel;
