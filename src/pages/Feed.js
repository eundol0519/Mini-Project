// Feed.js

// *** 패키지 import
import React from "react";

import { Grid, Button, Text, Input } from "../elements/index";
import Post from "../components/Post";
import Header from "../components/Header";
import { useHistory } from "react-router";

const Feed = (props) => {

  const user_token = localStorage.getItem("user_token") ? true : false;
  const history = useHistory();

  if (!user_token) {
    window.alert("로그인 후 이용 가능합니다.");
    history.replace("/");
  }
  
  return (
    <React.Fragment>
      <Header></Header>
      <Grid center>
        <Text size="1.5em" bold>
          내가 작성한 글
        </Text>
        <Grid is_flex padding="10px" width="auto" flexFlow>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </Grid>
      </Grid>
      <Grid>
        <Text size="1.5em" bold>
          내가 답변한 글
        </Text>
        <Grid is_flex padding="10px" width="auto" flexFlow>
          <Post noWrap></Post>
          <Post noWrap></Post>
          <Post noWrap></Post>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Feed;
