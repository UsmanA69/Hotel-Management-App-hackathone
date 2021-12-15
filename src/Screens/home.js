import "../Css/home.css";
import ItemCard from "../Components/itemCard";
import { auth, onAuthStateChanged } from "../config/Firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {

  

  return (
    <>
      <ItemCard />
    </>
  );
};

export default Home;
