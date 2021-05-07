import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import PlayListsReducer from "./PlayListsReducer";
import SearchReducer from './SearchReducer';

const rootReducer = combineReducers({
  UserReducer,
  PlayListsReducer,
  SearchReducer,
});

export default rootReducer;