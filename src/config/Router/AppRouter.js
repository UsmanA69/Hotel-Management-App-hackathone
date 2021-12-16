import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddRoom from "../../Screens/AddRoom";
import Cart from "../../Screens/Cart";
import CompleteScreen from "../../Screens/CompleteScreen";
import Home from "../../Screens/home";
import NewLogin from "../../Screens/NewLogin";
import NewSignUp from "../../Screens/NewSignUp";
import UserBookingDetails from "../../Screens/userBookingDetails";
import DetailConfirmation from "../../Screens/userDetails";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<NewLogin />} />
        <Route path="/signup" element={<NewSignUp />} />
        <Route path="/info" element={<Cart />} />
        <Route path="/confirm-detail" element={<DetailConfirmation />} />
        <Route path="/completed" element={<CompleteScreen />} />
        <Route path="/addroom" element={<AddRoom />} />
        <Route path="/booking-details" element={<UserBookingDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
