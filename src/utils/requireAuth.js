import React, {Component} from "react";
import {connect} from "react-redux";
import history from "./history";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      if (!this.props.isLoggedIn) history.push("/");
    }

    componentDidUpdate() {
      if (!this.props.isLoggedIn) history.push("/");
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      isLoggedIn: state.isLoggedIn
    }
  };

  return connect(mapStateToProps,{})(ComposedComponent);
};
