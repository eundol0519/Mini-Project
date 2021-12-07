// *** 패키지 import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import axios from "axios";

// *** 액션 타입
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const IS_LOGIN = "IS_LOGIN";

// *** 액션 생성 함수
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const loginCheck = createAction(IS_LOGIN, () => {});
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (is_login, username) => ({
  is_login,
  username,
}));

// *** 초기값
const initialState = {
  is_login: false, // 임시
  username: null, // 아이디
};

// *** 미들웨어

// *** 로그인 여부 확인
const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    // axios.get("/api/islogin").then((response) => {
    //   if (response) {
    //     const is_login = true;
    //     dispatch(setUser(is_login, response.userInfo.username));
    //   }
    // }).catch((err)=>{
    //   console.log("로그인 여부 확인 실패");
    // })

    const user = getState().user.is_login;

    if (user === false) {
      console.log("로그인 여부 확인 실패");
      return;
    }

    const is_login = true;
    const username = user.username;
    dispatch(setUser(is_login, username));
    console.log("로그인 여부 확인 성공");
  };
};

// *** 로그인 처리
const loginFB = (username, password) => {
  return function (dispatch, getState, { history }) {
    // axios // 로그인 요청
    //   .post("/api/login", { username: username, password: password })
    //   .then((response) => {
    //     axios.get("/api/isLogin").then((reponse) => { // 로그인 여부 확인
    //       dispatch(setUser({ username: username, is_login: true }));
    //       console.log("로그인 성공");
    //     }).catch((err) => {
    //         console.log("로그인 여부 실패", err)
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("로그인 요청 실패", err);
    //   });

    const is_login = true;
    dispatch(setUser({ is_login, username }));
  };
};

// *** 로그아웃
const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    // axios // 로그아웃
    //   .get("/api/logout")
    //   .then((reponse) => {
    //     dispatch(logOut())
    //     console.log("로그아웃 성공");
    //   })
    //   .catch((err) => {
    //     "로그아웃 실패";
    //   });

    dispatch(logOut());
    console.log("로그아웃 성공");
  };
};

// *** 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) => {
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.is_login = action.payload.is_login;
        draft.username = action.payload.username;
      });
    },
    [LOG_OUT]: (state, action) => {
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.username = null;
        draft.is_login = false;
      });
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
  logoutFB,
  loginCheckFB,
};

export { actionCreators };
