import React from "react";
import {Route, Router, Switch} from "react-router-dom";

import history from "./utils/history";
import Header from "./layout/Header";
import CommentList from "./pages/comments/CommentList";
import CommentPost from "./pages/comments/CommentPost";

const App = () => {
  return (
    <div className="ui container" style={{marginTop: "10px"}}>
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path={"/"} exact component={CommentList}/>
          <Route path={"/post"} exact component={CommentPost}/>
        </Switch>
      </Router>
    </div>
  )
};

export default App;
