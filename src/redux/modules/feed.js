// *** 패키지 import

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// *** 액션 타입
const GET_FEED = "GET_FEED";

// *** 액션 생성 함수
const getFeed = createAction(GET_FEED, (myContents, myPosts) => ({
  myContents,
  myPosts,
}));

// *** 초기값
const initialState = {
  myPosts: [
    {
      postId: 1,
      title: "제목이에요",
      content: "내용이에요",
    },
    {
      postId: 2,
      title: "제목 2에요",
      content: "내용 2에요",
    },
  ],
  myComments: [
    {
      commentId: 1,
      comment: "댓글이에요",
      createdAt: "날짜",
    },
    {
      commentId: 2,
      comment: "댓글 2에요",
      createdAt: "날짜",
    },
  ],
};

// *** 미들웨어
const getFeedFB = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");

    axios
      .get("http://3.37.36.119/api/feeds", {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log("피드 정보 가져오기 성공");

        const myContents = response.data.myComments;
        const myPosts = response.data.myPosts;

        if (myContents == undefined || myPosts == undefined) {
          console.log("undefined");
          return;
        }

        dispatch(getFeed(myContents, myPosts));
      })
      .catch((err) => {
        console.log("피드 정보 가져오기 실패", err);
      });
  };
};

// *** 리듀서
export default handleActions(
  {
    [GET_FEED]: (state, action) => {
      return produce(state, (draft) => {
        draft.myPosts = action.payload.myPosts;
        draft.myComments = action.payload.myContents;
      });
    },
  },
  initialState
);

// *** 액션 생성 함수 export
const actionCreators = {
  getFeedFB,
};

export { actionCreators };
