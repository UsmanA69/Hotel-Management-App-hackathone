import React, { useEffect } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import {set,ref,database,onAuthStateChanged,auth} from '../config/Firebase/Firebase'

const CompleteScreen = () => {

    const navigate = useNavigate();
    // const location = useLocation();
    // console.log(location.state);
    // const { userUid , newobj} = location.state;
    // console.log(userUid);

    // set(ref(database, "users/" + userUid), newobj);

    // useEffect(() => {
    //   onAuthStateChanged(auth, (user) => {
          
    //     });
    //   }, []);

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1>Completed</h1>
            <button onClick={()=>navigate("/")}>Back To Home</button>
        </div>
    )
}

export default CompleteScreen
