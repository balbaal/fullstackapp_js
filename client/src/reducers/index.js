import { combineReducers } from "redux";

import studentReducer from "./studentReducer";
import collegeReducer from "./collegeReducer";

export default combineReducers({
  student: studentReducer,
  college: collegeReducer
});