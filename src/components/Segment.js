import React from "react";

const Segment = props => {
  return (
    <div className={"ui segment"} key={props.segmentKey}>
      {props.content}
    </div>
  )
};

export default Segment;
