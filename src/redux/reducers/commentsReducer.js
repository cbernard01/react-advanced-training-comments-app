import {FETCH_COMMENTS, SAVE_COMMENT, RESET_COMMENTS} from "../actions/actionTypes";

function formatComments(payload) {
  return payload.map(comment => {
    return {id: comment.id, name: comment.name};
  });
}

export default (state=[], action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return [...state, ...formatComments(action.payload)];
    case SAVE_COMMENT:
      return [action.payload, ...state];

    case RESET_COMMENTS:
      return [...formatComments(action.payload)];
    default:
      return state;
  }
}
