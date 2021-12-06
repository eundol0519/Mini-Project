// SignUp.js

// *** 패키지 import
import React from "react";
import Modal from "react-modal";

const SignUp = (props) => {
  const [modal, setModal] = React.useState(props.modal ? true : false);
  // props.modal : SignUp 컴포넌트에 props로 값을 넘겨 줄 때
  // 로그인에서 회원가입을 눌렀을 경우 modal을 유지 해야 하기 때문에 이렇게 받음

  // 모달창을 닫으면 header의 state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    if(props.setLoginModal){ // setLoginModal이 있을 경우에 false로 바꿉니다.
      props.setLoginModal(false); 
    }
    props.setSignUpModal(false);
  };

  return (
    <div>
      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={modalOff}
        // 모달창 밖을 누르거나, ESC를 누를 경우 모달창을 끈다.
        style={{
          // inLine Styles
          content: {
            left: "30%",
            right: "30%",
            botton: "10%",
          },
        }}
      >
        회원가입
      </Modal>
    </div>
  );
};

export default SignUp;
