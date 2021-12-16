
export const SEND_DATA_TO_PAYMENT = (userData) => ({
  type: "SEND_DATA_TO_PAYMENT",
  userData
});

export const SEND_USER_UID = (userUid) => ({
  type: "SEND_USER_UID",
  userUid
});

export const GET_SELECTED_HOTEL = (roomData) => ({
  type: "GET_SELECTED_HOTEL",
  roomData
});

export const GET_BOOKING_DETAILS = (dbData) => ({
  type: "GET_BOOKING_DETAILS",
  dbData
});
