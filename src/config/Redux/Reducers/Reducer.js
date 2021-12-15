import sendDataToPayment from "./SendtoPayment";
import getUserUid from "./getUserUid";
import getSelectedHotel from './getSelectedHotel'
import getBookingData from "./getBookingData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    sendDataToPayment,
    getUserUid,
    getSelectedHotel,
    getBookingData
});

export default rootReducer;
