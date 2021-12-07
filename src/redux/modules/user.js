// *** 패키지 import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// *** 액션 타입
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const IS_LOGIN = "IS_LOGIN";

// *** 액션 생성 함수
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (username, password) => ({
  username,
  password,
}));
const loginCheck = createAction(IS_LOGIN, (is_login) => ({ is_login }));

// *** 초기값
const initialState = {
  is_login: false, // 임시
  username: null, // 아이디
  password: null, // 비밀번호
};

// *** 미들웨어

// *** 로그인 확인
const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    // axios.get("/api/islogin").then((response) => {
    //   if (response) {
    //     const is_login = true;
    //     dispatch(loginCheck(is_login));
    //   }
    // }).catch((err)=>{
    //   console.log("로그인 여부 확인 실패");
    // })
    const is_login = true;
    dispatch(loginCheck(is_login));
  };
};

// *** 로그인 처리
const loginFB = (username, password) => {
  return function (dispatch, getState, { history }) {
    // axios // 로그인 요청
    //   .post("/api/login", { username: username, password: password })
    //   .then((response) => {
    //     axios.get("/api/isLogin").then((reponse) => { // 로그인 여부 확인
    //       dispatch(setUser({ username: username, password: password }));
    //       console.log("로그인 성공");
    //     }).catch((err) => {
    //         console.log("로그인 여부 실패", err)
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("로그인 요청 실패", err);
    //   });

    dispatch(setUser({ username, password }));
    console.log("로그인 처리!!");
  };
};

// *** 리듀서
export default handleActions(
  {
    [IS_LOGIN]: (state, action) => {
      produce(state, (draft) => {
        draft.is_login = true;
      });
    },
    [SET_USER]: (state, action) => {
      produce(state, (draft) => {
        draft.is_login = true;
        draft.username = action.payload.username;
        draft.password = action.payload.password;
      });
    },
    [LOG_OUT]: (state, action) => {
      produce(state, (draft) => {});
    },
    [GET_USER]: (state, action) => {
      produce(state, (draft) => {});
    },
  },
  initialState
);

// *** 액션 생성 함수 export
const actionCreators = {
  loginFB,
  loginCheckFB,
};

export { actionCreators };
