import { get_new_release } from "../types/type";

const initialState = {
  albums: [],
};

const BrowseReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_new_release:
      return { ...state, albums: action.newRelease };
    default:
      return state;
  }
};

export default BrowseReducer;
