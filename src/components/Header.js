// Header.js
import logo from "../shared/images/logo.png";
// *** 패키지 import
import React from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";
import { Grid, Button, Text } from "../elements/index";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user_token = localStorage.getItem("user_token") ? true : false;

  const [loginModal, setLoginModal] = React.useState(false);
  const [signUpModal, setSignUpModal] = React.useState(false);

  const loginModalOpen = () => {
    setLoginModal(true);
  };

  const signUpModalOpen = () => {
    setSignUpModal(true);
  };

  const logOut = () => {
    dispatch(userActions.logoutFB());
    localStorage.removeItem("user_token");
    window.alert("로그아웃 하셨습니다.");
    window.location.reload();
  };

  if (user_token) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px" margin="-3% 0px 0px 0px">
          <Grid _onClick={() => (window.location.href = "/")}>
            <Logo src={logo}></Logo>
          </Grid>

          <Grid is_flex>
            <Button
              width="25%"
              height="5.8%"
              margin="1% 0% 0px 0%"
              _onClick={() => {
                history.push("/feed");
              }}
            >
              피드
            </Button>
            <Button
              width="25%"
              height="5.8%"
              margin="1% 20% 0px -13%"
              _onClick={logOut}
            >
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <Grid is_flex padding="4px 16px" margin="-3% 0px 0px 0px">
        <Grid _onClick={() => (window.location.href = "/")}>
          <Logo src={logo}></Logo>
        </Grid>

        <Grid is_flex>
          <Button
            width="25%"
            height="5.8%"
            margin="1% 0% 0px 0px"
            _onClick={loginModalOpen}
          >
            로그인
          </Button>
          {
            loginModal && (
              <Login
                modal={loginModal}
                setLoginModal={setLoginModal}
                setSignUpModal={setSignUpModal}
              ></Login>
            )
          }
          <Button
            width="25%"
            height="5.8%"
            margin="1% 20% 0px -13%"
            _onClick={signUpModalOpen}
          >
            회원가입
          </Button>
          {signUpModal && (
            <SignUp
              modal={signUpModal}
              setLoginModal={setLoginModal}
              setSignUpModal={setSignUpModal}
            ></SignUp>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const Logo = styled.img`
  width: 18%;
  height: 23%;
  margin: 3% 0px 0px 10%;
  cursor: pointer;
`;

export default Header;
