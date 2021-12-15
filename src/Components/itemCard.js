import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Data from "./Data";
import {
  signOut,
  auth,
  onAuthStateChanged,
  onValue,
  ref,
  database,
} from "../config/Firebase/Firebase";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CircularProgress, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { SEND_ITEM_TO_CART } from "../config/Redux/Actions/actions";
import { useDispatch } from "react-redux";
import MuiAppBar from "./Navbar";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ItemCard = () => {
  const [items, setItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [item, setItem] = useState([]);

  const [price, setPrice] = useState("");
  const [noOfRooms, setNoOfRooms] = useState("");
  const [service, setService] = useState("");

  const navigate = useNavigate();

  const filterPrice = (event) => {
    console.log(event.target.value);
    setPrice(event.target.value);
    let a = event.target.value;
    // let b = parseFloat(a);
    const UpdatedArr = items.filter((x) => {
      return x.perDayPrice == a;
    });
    setItems(UpdatedArr);
  };

  const filterRooms = (event) => {
    setNoOfRooms(event.target.value);
    let a = event.target.value;
    let b = parseFloat(a);
    const UpdatedArr = items.filter((curElem) => {
      return curElem.numOfRooms == b;
    });
    setItems(UpdatedArr);
  };

  const filterService = (event) => {
    setService(event.target.value);
    let a = event.target.value;
    const UpdatedArr = items.filter((x) => {
      return x.hotelService == a;
    });
    setItems(UpdatedArr);
  };

  const addToCart = (elem) => {
    // setItemCount(itemCount + 1);
    // dispatch(SEND_ITEM_TO_CART(elem));
    if (loggedIn) {
      navigate("/info");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    let arr = [];

    onValue(ref(database, "hotels/"), (snapshot) => {
      // const data = snapshot.val();
      snapshot.forEach((snap) => {
        arr.push(snap.val());
      });
    });
    setItem(arr)
    // console.log(items);

    //setItems(arr);
    // console.log(items);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        // setLoading(false);
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      {!items ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <MuiAppBar />
          <div className="data-items container-fluid mt-5">
            <div className="row">
              <div style={{ paddingLeft: "5%" }}>
                {/* <Box sx={{ minWidth: 120 }}>
                  <FormControl
                    sx={{
                      width: { xs: "100%", sm: "150px" },
                      mr: 2,
                      mt: { xs: 2, sm: 0 },
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Price Per Day
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={price}
                      label="Price Per Day"
                      onChange={filterPrice}
                    >
                      {items.map((curElem) => {
                        const { perDayPrice } = curElem;
                        return <MenuItem value={perDayPrice}>${perDayPrice}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                  <FormControl
                    sx={{
                      width: { xs: "100%", sm: "200px" },
                      mr: 2,
                      mt: { xs: 2, sm: 0 },
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Numbers Of Room
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={noOfRooms}
                      label="Numbers Of Room"
                      onChange={filterRooms}
                    >
                      {items.map((curElem) => {
                        const { numOfRooms } = curElem;
                        return <MenuItem value={numOfRooms}>{numOfRooms}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                  <FormControl
                    sx={{
                      width: { xs: "100%", sm: "150px" },
                      mr: 2,
                      mt: { xs: 2, sm: 0 },
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Service
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={service}
                      label="Service"
                      onChange={filterService}
                    >
                      {items.map((curElem) => {
                        const { hotelService } = curElem;
                        return <MenuItem value={hotelService}>{hotelService}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Box> */}
              </div>
              <div className="col-11 mx-auto">
                <div className="row my-5">
                  {item.map((elem, index) => {
                    const {
                      hotelPicture,
                      hotelName,
                      hotelService,
                      numOfRooms,
                      perDayPrice,
                    } = elem;
                    return (
                      <div
                        key={index}
                        className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5"
                      >
                        <div className="row item-inside">
                          <div className="col-12 col-md-12 col-lg-4 img-div">
                            <img
                              src={hotelPicture}
                              alt={hotelName}
                              className="img-fluid"
                            />
                          </div>

                          <div className="col-12 col-md-12 col-lg-8">
                            <div className="main-tittle pt-4 pb-3">
                              <h2>{hotelName}</h2>
                              <p>No Of Rooms : {numOfRooms}</p>
                              <p>{hotelService}</p>
                            </div>
                            <div className="price-and-add">
                              <div className="price-and-add-divide d-flex justify-content-between">
                                <h4>Price: ${perDayPrice} Per Day</h4>
                                <button
                                  onClick={() => addToCart(elem)}
                                  className="add-btn btn btn-outline-success"
                                >
                                  Select
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ItemCard;
