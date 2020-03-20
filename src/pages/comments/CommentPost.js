import React from "react";

import CommentForm from "./CommentForm";
import requireAuth from "../../utils/requireAuth";

const CommentPost = props => {
  return (
    <React.Fragment>
      <h1>Enter a Comment</h1>
      <CommentForm/>
    </React.Fragment>
  );
};

export default requireAuth(CommentPost);
