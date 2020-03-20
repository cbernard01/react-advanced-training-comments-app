import {SIGN_IN, SIGN_OUT} from "../actions/actionTypes";

export default function (state = false, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return action.payload;
    default:
      return state;
  }
}
