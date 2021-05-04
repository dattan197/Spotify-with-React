import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import PlayListsReducer from "./PlayListsReducer";

const rootReducer = combineReducers({
  UserReducer,
  PlayListsReducer,
});

export default rootReducer;
