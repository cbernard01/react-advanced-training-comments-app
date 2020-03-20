import {FETCH_COMMENTS, RESET_COMMENTS, SAVE_COMMENT, SIGN_IN, SIGN_OUT} from "./actionTypes";

import fetchAPI from "../../utils/fetchAPI";
import history from "../../utils/history";

export const fetchComments = () => async dispatch => {
  const response = await fetchAPI.get("/comments");
  dispatch({type: FETCH_COMMENTS, payload: response.data});
};

export const saveComment = comment => dispatch => {
  dispatch({type: SAVE_COMMENT, payload: comment});
  history.push("/");
};

export const resetComments = () => async dispatch => {
  const response = await fetchAPI.get("/comments");
  dispatch({type: RESET_COMMENTS, payload: response.data});
};

export const signIn = () => dispatch => {
  dispatch({type: SIGN_IN, payload: true});
};

export const signOut = () => dispatch => {
  dispatch({type: SIGN_OUT, payload: false});
};
