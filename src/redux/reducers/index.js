import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import commentsReducer from "./commentsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  form: formReducer,
  comments: commentsReducer,
  isLoggedIn: authReducer
});
