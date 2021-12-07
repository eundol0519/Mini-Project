// App.js

// *** 패키지 import
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

// *** 컴포넌트 또는 CSS import
import "./App.css";
import Index from "../pages/Index";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Feed from "../pages/Feed";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Index}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signUp" exact component={SignUp}></Route>
        <Route path="/feed" exact component={Feed}></Route>
        <Route path="/postDetail" exact component={PostDetail}></Route>
        <Route path="/postWrite" exact component={PostWrite}></Route>
      </ConnectedRouter>
    </div>
  );
}

export default App;
