import { get_new_release } from "../types/type";

const initialState = {
  albums: [],
};

const BrowseReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case 'GET_NEW_RELEASES':
      //console.log(action.newReleases);
      return { ...state, albums: action.newReleases };
    default:
      return state;
  }
};

export default BrowseReducer;
