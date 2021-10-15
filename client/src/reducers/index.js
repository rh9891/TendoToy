import { combineReducers } from "redux";
import responseReducer from "./responseReducer";

export default combineReducers({
  response: responseReducer,
});
