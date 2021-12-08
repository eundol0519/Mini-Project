// PostDetail.js

// *** 패키지 import
import React, { useState } from "react";
import { Grid, Button, Text, Input } from "../elements/index";
import { useHistory } from "react-router";

import Header from "../components/Header";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

const PostDetail = (props) => {
  
  const [myPost, setMyPost] = useState(true);
  const history = useHistory();
  const user_token = localStorage.getItem('user_token') ? true : false;

  if(!user_token){
    window.alert("로그인 후 이용 가능합니다.")
    history.replace('/')
  }

  return (
    <React.Fragment>
      <Header></Header>
      <Grid margin="5% 0px 5% 0px">
        <Text>게시물 제목입니다.</Text>
      </Grid>
      <Grid margin="5% 0px 5% 0px">
        <Text>게시물 내용입니다.</Text>
      </Grid>
      <Grid>
        <CommentWrite></CommentWrite>
      </Grid>
      <Grid>
        <CommentList></CommentList>
      </Grid>
      <Grid is_flex center>
        {myPost ? (
          <Grid is_flex>
            <Button
              text="수정"
              width="12.5vw"
              margin="0px 0px 0px 30%"
            ></Button>
            <Button text="삭제" width="12.5vw" marin="0px 0px 0px 30%"></Button>
          </Grid>
        ) : (
          <Button text="넘기기" width="20vw" margin="0px 0px 0px 28%"></Button>
        )}
        <Button text="댓글쓰기" width="20vw" margin="0px 25% 0px 0px"></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
