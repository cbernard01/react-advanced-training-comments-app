import React from "react";
import {connect} from "react-redux";
import {resetComments, saveComment} from "../../redux/actions";


import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

class CommentForm extends React.Component {
  state = {comment: {id: 5000, name: ""}};

  formHandler = event => event.preventDefault();
  onChangeHandler = event => {
    const id = this.state.comment.id + 1;
    this.setState({comment: { id: id, name: event.target.value}});
  };

  onSubmitHandler = () => {
    if (this.state.comment.name === "") return;
    console.log(this.state.comment);
    this.props.saveComment(this.state.comment);
    this.setState({comment: {id: 506, name: ""}});
  };

  onFetchHandler = () => {
    this.props.resetComments();
  };

  render() {
    return (
      <div className="ui grid">
        <div className="seven wide column">

          <form className={"ui form"} onSubmit={this.formHandler}>
            <TextArea
              id={"comment-text-area"}
              name={"comment"}
              rows={"5"}
              onTextChange={this.onChangeHandler}
              value={this.state.comment.name}
            />
          </form>
          <div style={{marginTop: "15px"}}>
            <Button name={"Submit"} onButtonClick={this.onSubmitHandler} />
            <Button name={"Reset Comments"} onButtonClick={this.onFetchHandler}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: Object.values(state.comments)
  };
};

export default connect(mapStateToProps, {resetComments, saveComment})(CommentForm);
