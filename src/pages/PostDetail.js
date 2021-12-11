// PostDetail.js

// *** 패키지 import
import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../elements/index";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import Header from "../components/Header";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

const PostDetail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user_token = localStorage.getItem("user_token") ? true : false;
  const params = useParams();

  const postInfo = useSelector((state) => state.post);

  React.useEffect(() => {
    // 랜덤한 게시물일 경우
    if (!params.postId && !postInfo.postId) {
      // 랜덤한 정보를 서버에 요청
      dispatch(postActions.randomPostFB());
    }

    // 내 게시물일 경우
    if (params.postId) {
      dispatch(postActions.myPostFB(params.postId));
    }

    // 내가 댓글을 단 게시물을 보는 경우
    // postInfo가 있을 때 해당하는 거라서 따로 처리 안함
  }, []);

  // 넘어가기 버튼 클릭 시 다음 게시물 요청하기
  const nextPost = () => {
    dispatch(postActions.randomPostFB());
    // 또는 페이지 다시 요청하기
    // history.replace('/post')
  };

  // 수정 버튼 클릭 시
  const postUpdate = () => {
    history.push(`/edit/${params.postId}`); // 임시용
    // history.push({ pathnamae: "/postWrite", isEdit: true });
  };

  // 삭제 버튼 클릭 시
  const postDelete = () => {
    const deleteCheck = window.confirm("게시물을 삭제 하시겠습니까?");

    if (deleteCheck) {
      dispatch(postActions.deletePostDB(params.postId));
      window.alert("게시물이 삭제 되었습니다.");
      window.location.href = "/feed";
    }
  };

  if (!user_token) {
    window.alert("로그인 후 이용 가능합니다.");
    history.replace("/");
  }

  if (params.postId) {
    // 내 게시물일 경우
    return (
      <React.Fragment>
        <Header></Header>
        <Grid margin="1% 0px 1% 0px">
          <Grid>
            {postInfo.imageUrl ? (
              <img
                src={`http://3.37.36.119${postInfo.imageUrl}`}
                alt="게시물 사진"
                width="30%"
              ></img>
            ) : (
              <Grid margin="8% 0px 0px 0px"></Grid>
            )}
          </Grid>
          <Grid margin="2% 0px 0px 0px">
            <Text margin="auto" bold size="2em" width="40%" height="5vh">
              {postInfo.title}
            </Text>
            <Hr />
            <Text margin="auto" size="1.5em" width="40%" height="5vh">
              {postInfo.content}
            </Text>
          </Grid>
        </Grid>
        <Grid margin="2% 0px 1% 0px">
          <Button
            text="수정"
            width="5vw"
            margin="0px 1% 0px 0px"
            _onClick={postUpdate}
          ></Button>
          <Button
            text="삭제"
            width="5vw"
            margin="0px 0px 0px 1%"
            _onClick={postDelete}
          ></Button>
        </Grid>
        <Grid>
          <CommentWrite></CommentWrite>
        </Grid>
        <Grid margin="0px 0px 3% 0px">
          <CommentList></CommentList>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    // 랜덤한 게시물일 경우
    <React.Fragment>
      <Header></Header>
      <Grid margin="1% 0px 1% 0px">
        <Grid>
          {postInfo.imageUrl ? (
            <img
              src={`http://3.37.36.119${postInfo.imageUrl}`}
              alt="게시물 사진"
              width="30%"
            ></img>
          ) : (
            <Grid margin="8% 0px 0px 0px"></Grid>
          )}
        </Grid>
        <Grid margin="2% 0px 0px 0px">
          <Text margin="auto" bold size="2em" width="40%" height="5vh">
            {postInfo.title}
          </Text>
          <Hr />
          <Text margin="auto" size="1.5em" width="40%" height="5vh">
            {postInfo.content}
          </Text>
        </Grid>
      </Grid>
      <Grid margin="1% 0px 1% 0px">
        <Button
          text="넘어가기"
          width="10vw"
          margin="auto"
          _onClick={nextPost}
        ></Button>
      </Grid>
      <Grid>
        <CommentWrite></CommentWrite>
      </Grid>
      <Grid margin="0px 0px 3% 0px">
        <CommentList></CommentList>
      </Grid>
    </React.Fragment>
  );
};

const Hr = styled.hr`
  width: 35%;
`;

export default PostDetail;