import {FETCH_COMMENTS, RESET_COMMENTS, SAVE_COMMENT} from "./actionTypes";

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
