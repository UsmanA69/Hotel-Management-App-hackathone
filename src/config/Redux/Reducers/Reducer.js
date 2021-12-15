import sendDataToPayment from "./SendtoPayment";
import getUserUid from "./getUserUid";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    sendDataToPayment,
    getUserUid
});

export default rootReducer;
