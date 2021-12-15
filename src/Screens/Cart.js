import "../Css/cart.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Form from '../Components/form'
import { useDispatch } from "react-redux";
import { SEND_USER_UID } from "../config/Redux/Actions/actions";

const Cart = () => {
  // const myState = useSelector((state) => state.sendDataToCart);
  // const { obj } = myState;
  // console.log(myState)

  // const location = useLocation()
  // console.log(location);
  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location);
  let userUid= location.state;
  dispatch(SEND_USER_UID(userUid));


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
            {/* <ShoppingCartIcon className="cart-icon" /> */}
            <FormatListBulletedIcon className="cart-icon" />
          </div>
        </div>
        <hr />

        <div className="body-div">
          <div className="heading-div">
            <h3>Add Your Details</h3>
          </div>
        </div>

        <div className="items-div">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Cart;
