const INITIAL_STATE = {};

const getBookingData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_BOOKING_DETAILS':
       return { ...action};

    default:
      return state;
  }
};
export default getBookingData;
