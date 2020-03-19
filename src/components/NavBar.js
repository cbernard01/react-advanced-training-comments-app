import React from "react";
import Button from "./Button";
import {Link} from "react-router-dom";

const NavBar = props => {
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
          <Button buttonClass={"default"} name={"Sign In"}/>
        </div>
      </div>
    </div>
  )
};

export default NavBar;
