// *** 패키지 import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// *** 액션 타입
const GET_POST = "GET_POST";
const SET_POST = "SET_POST";

// *** 액션 생성 함수
const setPost = createAction(SET_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));

// *** 초기값
const initialState = {
  postId: 1,
  title: "강아지가 너무 귀엽다",
  contents: "우리집 강아지가 너무 귀여워서 고민이다.",
  image: null,
  comments: [
    {
      commentId: 1,
      comment: "댓글 내용 1",
      createdAt: "2021-12-09",
    },
    {
      commentId: 2,
      comment: "댓글 내용 2",
      createdAt: "2021-12-01",
    },
    {
      commentId: 3,
      comment: "댓글 내용 3",
      createdAt: "2021-12-02",
    },
  ],
};

// *** 미들웨어
const randomPostFB = () => {
  return function (dispatch, getState, { history }) {
    console.log("게시물 조회");
    // axios
    //   .get("http://3.37.36.119/api/posts")
    //   .then((response) => {
    //     dispatch(getPost(response));
    //     console.log("게시물 조회 성공");
    //   })
    //   .catch((err) => {
    //     console.log("게시물 조회 실패", err);
    //   });
  };
};

const myPostFB = (postId) => {
  return function (dispatch, getState, { history }) {
    console.log("내가 작성한 게시물 조회");
    // axios
    //   .get(`http://3.37.36.119/api/posts/${postId}`)
    //   .then((response) => {
    //     console.log("내가 작성한 게시물 조회 성공");
    //     dispatch(getPost(response))
    //     history.replace(`/post/${postId}`);
    //   })
    //   .catch((err) => {
    //     console.log("내가 작성한 게시물 조회 실패", err);
    //   });
  };
};

const myCommentFB = (commentId) => {
  return function (dispatch, getState, { history }) {
    console.log("내가 댓글을 작성한 게시물 조회");
    // axios
    //   .get(`http://3.37.36.119/api/comments/${commentId}`)
    //   .data({commentId : commentId})
    //   .then((response) => {
    //     console.log("내가 댓글을 작성한 게시물 조회 성공");
    //     dispatch(getPost(response))
    //     history.replace('/post');
    //   })
    //   .catch((err) => {
    //     console.log("내가 댓글을 작성한 게시물 조회 실패", err);
    //   });
  };
};

const deletePostFB = () => {
  return function (dispatch, getState, { history }) {
    console.log("게시물 삭제");
  };
};

// *** 리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) => {
      produce(state, (draft) => {});
    },
    [GET_POST]: (state, action) => {
      produce(state, (draft) => {
        draft = action.payload.post;
      });
    },
  },
  initialState
);

// *** 액션 생성 함수 export
const actionCreators = {
  setPost,
  getPost,
  randomPostFB,
  deletePostFB,
  myPostFB,
  myCommentFB,
};

export { actionCreators };
