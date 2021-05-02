import { combineReducers } from "redux";

import BrowseReducer from "./BrowseReducer";
import UserReducer from "./UserReducer";
import PlayListsReducer from "./PlayListsReducer";

const rootReducer = combineReducers({
  BrowseReducer,
  UserReducer,
  PlayListsReducer,
});

export default rootReducer;
