import React from "react";
import {connect} from "react-redux";
import {fetchComments} from "../../redux/actions";

import CommentItem from "./CommentItem";


class CommentList extends React.Component {

  componentDidMount() {
    if (this.props.comments.length === 0) {
      this.props.fetchComments();
    }
  }


  renderContent = () => {
    return this.props.comments.map(comment => {
      return <CommentItem key={comment.id} comment={comment}/>;
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Comment List</h1>

        {this.renderContent()}
      </React.Fragment>
    );
  };
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps, {fetchComments})(CommentList);
