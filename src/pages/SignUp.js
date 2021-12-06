// SignUp.js

// *** 패키지 import
import React from "react";
import Modal from "react-modal";

const SignUp = (props) => {
  // {location}과 props를 한꺼번에 쓰면 어디에 어떻게 값이 들어와야 하는 지 몰라서 오류가 발생한다.
  // 그렇기 때문에 props로 통일하여 값을 받았다.

  const [modal, setModal] = React.useState(props.modal ? true : props.location.modal ? true : false);
  // props.modal : SignUp 컴포넌트에 props로 값을 넘겨 줄 때
  // props.location.modal : history에서 modal로 값을 넘겨 줄 때
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
