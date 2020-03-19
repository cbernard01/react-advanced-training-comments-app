import React from "react";
import Segment from "../../components/Segment";

const CommentItem = props => {
    return <Segment segmentKey={props.comment.id} content={props.comment.name}/>;
};

export default CommentItem;
