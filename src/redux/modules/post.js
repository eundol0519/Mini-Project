// *** 패키지 import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import "moment";
import axios from "axios";

// *** 액션 타입
const GET_POST = "GET_POST";
const SET_POST = "SET_POST";
const ADD_POST = "SET_POST";
const EDIT_POST = "EDIT_POST";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// *** 액션 생성 함수
const setPost = createAction(SET_POST, (postList) => ({ postList }));
const getPost = createAction(GET_POST, (postList) => ({ postList }));
const addComment = createAction(ADD_COMMENT, (commentList) => ({
  commentList,
}));
const addpost = createAction(ADD_POST, (title, content, imageUrl) => ({
  title,
  content,
  imageUrl,
}));

// *** 초기값
const initialState = {
  postId: null,
  title: null,
  content: null,
  imageUrl: null,
  comments: [
    {
      commentId: null,
      comment: null,
      createdAt: null,
    },
  ],
};

// *** 미들웨어

// 랜덤 게시물 조회
const randomPostFB = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");

    axios
      .get("http://3.37.36.119/api/posts", {
        headers: { Authorization: token },
      })
      .then((response) => {
        if (response.data === "") {
          window.alert("게시물이 없습니다.");
          history.replace("/");
          return;
        }

        console.log("게시물 조회 성공");
        dispatch(getPost(response.data));
        history.replace("/post");
      })
      .catch((err) => {
        console.log("게시물 조회 실패", err);
      });
  };
};

// 내 게시물 조회
const myPostFB = (postId) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");

    axios
      .get("http://3.37.36.119/api/posts/" + postId, {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log("내가 작성한 게시물 조회 성공");
        dispatch(getPost(response.data));
      })
      .catch((err) => {
        console.log("내가 작성한 게시물 조회 실패", err);
      });
  };
};

// 내가 댓글을 작성한 게시물 조회
const myCommentFB = (commentId) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");

    axios
      .get(
        `http://3.37.36.119/api/comments/${commentId}`,
        {
          headers: { Authorization: token },
        },
        { commentId: commentId }
      )
      .then((response) => {
        console.log("내가 댓글을 작성한 게시물 조회 성공");

        dispatch(getPost(response.data));
      })
      .catch((err) => {
        console.log("내가 댓글을 작성한 게시물 조회 실패", err);
      });
  };
};

// 게시물 추가
const addPostDB = (title, content, imageUrl) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");
    axios
      .post(
        `http://3.37.36.119/api/posts`,

        { title: title, content: content, imageUrl: imageUrl },
        {
          headers: { Authorization: token },
        } // 400일때 헤더가 있는데 서버측에서 헤더가 없다고 하면 데이터값 뒤로 헤더를 빼주자
      )
      .then((response) => {
        console.log(response);
        dispatch(addpost(title, content, imageUrl));
        history.replace("/");
      })
      .catch((err) => {
        console.log("글을 작성하려면 로그인을 하세요!", err);
      });
  };
};

// 게시물 수정
const editPostDB = (postId, content, imageUrl) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");
    axios
      .put(
        `http://3.37.36.119/api/posts/${postId}`,

        { content: content, imageUrl: imageUrl },
        {
          headers: { Authorization: token },
        } // 400일때 헤더가 있는데 서버측에서 헤더가 없다고 하면 데이터값 뒤로 헤더를 빼주자
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("글을 작성하려면 로그인을 하세요!", err);
      });
  };
};

// 게시물 삭제
const deletePostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");

    axios
      .delete(`http://3.37.36.119/api/posts/${postId}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log("게시물 삭제 성공");
      })
      .catch((err) => {
        console.log("게시물 삭제 실패", err);
      });
  };
};

// 댓글 작성
const addCommentFB = (postId, comment) => {
  return function (dispatch, getState, { history }) {
    console.log("댓글 작성");

    const token = localStorage.getItem("user_token");

    axios
      .post(
        `http://3.37.36.119/api/comments/${postId}`,
        { comment: comment },
        { headers: { Authorization: token } }
      )
      .then((response) => {
        console.log("댓글 작성 성공");

        const _comment = {
          commentId: getState().post.postId + 1,
          comment: comment,
          createdAt: moment().format("YYYY-MM-DD"),
        };

        const list = Object.values(getState().post.comments);
        // post modules에 있는 commets가 객체 형태여서 ...를 사용하지 못함.
        // 그래서 Object.values를 사용해서 배열로 만들어줌
        // dispatch 할 때는 내가 작성한 댓글과 기존에 있던 댓글을 같이 보냄
        dispatch(addComment([_comment, ...list]));
      })
      .catch((err) => {
        console.log("댓글 작성 실패", err);
      });
  };
};

// *** 리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) => {
      produce(state, (draft) => {});
    },
    [GET_POST]: (state, action) => {
      return produce(state, (draft) => {
        draft.postId = action.payload.postList.postId;
        draft.title = action.payload.postList.title;
        draft.imageUrl = action.payload.postList.imageUrl;
        draft.content = action.payload.postList.content;
        draft.comments = { ...action.payload.postList.comments };
      });
    },
    [ADD_POST]: (state, action) => {
      return produce(state, (draft) => {
        draft.title = action.payload.title;
        draft.content = action.payload.content;
        draft.imageUrl = action.payload.imageUrl;
        // console.log(action.payload.title);
      });
    },
    [ADD_COMMENT]: (state, action) => {
      return produce(state, (draft) => {
        draft.comments = action.payload.commentList;
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
  myPostFB,
  myCommentFB,
  addPostDB,
  editPostDB,
  deletePostDB,
  addCommentFB,
};

export { actionCreators };