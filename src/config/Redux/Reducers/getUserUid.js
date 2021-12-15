const INITIAL_STATE = {};

const getUserUid = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEND_USER_UID':
       return { ...action};

    default:
      return state;
  }
};
export default getUserUid;
