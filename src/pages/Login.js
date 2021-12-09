// Login.js

// *** 패키지 import
import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { Grid, Button, Input, Text } from "../elements/index";
import SignUp from "../pages/SignUp";

const Login = (props) => {
  const [username, setId] = React.useState(""); // 아이디
  const [password, setPwd] = React.useState(""); // 비밀번호
  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창이 열렸는 지 닫혔는 지
  const [active, setActive] = React.useState(true); // disabled가 활성화인 지 비활성화인 지
  const [signUpModal, setSignUpModal] = React.useState(false); // 로그인창인 지 회원가입 창인 지

  const dispatch = useDispatch();

  // disabled 체크
  const checkActive = () => {
    username !== "" && password !== "" ? setActive(false) : setActive(true);
  };

  // 로그인 버튼 클릭 시
  const login = () => {
    dispatch(userActions.loginFB(username, password));
    setModal(false);
    props.setLoginModal(false);
    props.setSignUpModal(false);
    // ★ loginFB에서 localStorage.setItem을 한 뒤에 localStorage.getItem을 했는 데 null이 뜸
  };

  // 회원가입 버튼 클릭 시
  const join = () => {
    setSignUpModal(true);
  };

  // 모달창을 닫으면 header의 state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    props.setLoginModal(false);
  };

  return (
    <div>
      {signUpModal ? ( // 회원가입 버튼을 눌렀을 경우
        <SignUp
          modal={signUpModal}
          setSignUpModal={props.setSignUpModal}
          setLoginModal={props.setLoginModal}
        ></SignUp>
      ) : (
        // 2번 경우처럼 로그인 -> 회원가입으로 이동하는 것이기 때문에 loginModal과 signUpModal을 보냅니다.
        // 누르지 않았을 경우
        <Modal
          isOpen={modal}
          ariaHideApp={false}
          onRequestClose={modalOff}
          // 모달창 밖을 누르거나, ESC를 누를 경우 모달창을 끈다.
          style={{
            // inLine Styles
            content: {
              left: "32.5%",
              right: "32.5%",
              botton: "10%",
            },
          }}
        >
          <Grid padding="16px" center>
            <Text size="3vw" bold>
              로그인
            </Text>
            <Grid padding="16px 0px" height="20%">
              <Grid margin="0px 0px 2% 0px">
                <Input
                  type="text"
                  placeholder="아이디를 입력 해주세요"
                  value={username}
                  _onChange={(e) => {
                    setId(e.target.value);
                  }}
                  _onKeyUp={checkActive}
                ></Input>
              </Grid>
              <Grid>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력 해주세요"
                  value={password}
                  _onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                  _onKeyUp={checkActive}
                  is_submit
                ></Input>
              </Grid>
              <br />
              <Button
                className={!active ? "activeBtn" : "unActiveBtn"}
                width="18vw"
                margin="1% 0px 1% 0px"
                _onClick={login}
                disabled={active}
              >
                로그인
              </Button>
              <Hr />
              <p>아직 회원이 아니시라면?</p>
              <Button width="18vw" margin="1% 0px 1% 0px" _onClick={join}>
                회원가입
              </Button>
            </Grid>
          </Grid>
        </Modal>
      )}
    </div>
  );
};

const Hr = styled.hr`
  margin-top: 3%;
  margin-bottom: 3%;
  width: 80%;
`;

export default Login;
