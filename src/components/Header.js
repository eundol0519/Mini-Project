// Header.js

// *** 패키지 import
import React from "react";
import { useHistory } from "react-router";

import { Grid, Button, Text } from "../elements/index";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Header = (props) => {
  const history = useHistory();
  const [loginModal, setLoginModal] = React.useState(false);
  const [signUpModal, setSignUpModal] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);
  // 리덕스에서 가져온 값을 기본값으르 담아둬야 함

  const loginModalOpen = () => {
    setLoginModal(true);
  };

  const signUpModalOpen = () => {
    setSignUpModal(true);
  };

  const logOut = ()=>{
    setIsLogin(false)
    window.alert("로그아웃 하셨습니다.")
  }

  if(isLogin){
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid _onClick={() => history.push("/")}>
            <Text margin="0px" size="24px" bold>
              로고
            </Text>
          </Grid>
  
          <Grid is_flex>
            <Button _onClick={()=>{history.push('/feed')}}>피드</Button>
            <Button _onClick={logOut}>로그아웃</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid _onClick={() => history.push("/")}>
          <Text margin="0px" size="24px" bold>
            로고
          </Text>
        </Grid>

        <Grid is_flex>
          <Button _onClick={loginModalOpen}>로그인</Button>
          {
              loginModal && <Login modal={loginModal}></Login>
          }
          <Button _onClick={signUpModalOpen}>회원가입</Button>
          {
              signUpModal && <SignUp modal={signUpModal}></SignUp>
          }
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
