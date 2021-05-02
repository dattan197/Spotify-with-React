const initialState = {
  token: null,
  user: null,
};

const UserReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action._token };
    case "GET_USER":
      console.log(action.user);
      return { ...state, user: action.user };
    case "LOG_OUT":
      return { ...state, token: null };
    default:
      return state;
  }
};

export default UserReducer;
