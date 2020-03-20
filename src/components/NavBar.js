import React from "react";
import Button from "./Button";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {signIn, signOut} from "../redux/actions";


class NavBar extends React.Component {
  onSignInHandler = () => this.props.signIn();
  onSignOutHandler = () => this.props.signOut();

  renderButton = () => {
    if (this.props.isLoggedIn) {
      return <Button buttonClass={"default"} name={"Sign Out"} onButtonClick={this.onSignOutHandler}/>;
    } else {
      return <Button buttonClass={"default"} name={"Sign In"} onButtonClick={this.onSignInHandler}/>;
    }
  };

  render() {
    return (
      <div className="ui secondary menu" id="nav-header">
        <div className="item">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="item">
          <Link to={"/post"}>Post</Link>
        </div>
        <div className="right menu">
          <div className="item">
            {this.renderButton()}
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, {signIn, signOut})(NavBar);
