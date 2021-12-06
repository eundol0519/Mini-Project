// SignUp.js

// *** 패키지 import
import React from "react";
import Modal from "react-modal";

const SignUp = (props) => {

  const [modal, setModal] = React.useState(props.modal ? true : false);
  // props.modal : SignUp 컴포넌트에 props로 값을 넘겨 줄 때
  // 로그인에서 회원가입을 눌렀을 경우 modal을 유지 해야 하기 때문에 이렇게 받음

  return (
    <>
      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={() => setModal(false)}
        // 모달창 밖을 누르거나, ESC를 누를 경우 모달창을 끈다.
        style={{
          // inLine Styles
          overlay: {
            left: "30%",
            right: "30%",
            botton: "10%",
          },
        }}
      >
        회원가입
      </Modal>
    </>
  );
};

export default SignUp;
