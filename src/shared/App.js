// App.js

// *** 패키지 import
import React from "react";
import { Route, Switch, Link } from "react-router-dom";

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
      <div>
        <Link to="/">메인</Link><br/>
        <Link to="/login">로그인</Link><br/>
        <Link to="/signUp">회원가입</Link><br/>
        <Link to="/feed">피드</Link><br/>
        <Link to="/postDetail">게시물 상세</Link><br/>
        <Link to="/postWrite">게시물 작성</Link>
      </div>

      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signUp" exact component={SignUp}></Route>
        <Route path="/feed" exact component={Feed}></Route>
        <Route path="/postDetail" exact component={PostDetail}></Route>
        <Route path="/postWrite" exact component={PostWrite}></Route>
        <Route>페이지를 찾을 수 없습니다.</Route>
      </Switch>
    </div>
  );
}

export default App;
