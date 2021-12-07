// PostWrtie.js

// *** 패키지 import
import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { getCookie } from "../shared/Cookie";

import { Grid, Button, Text, Input } from "../elements/index";
import Header from "../components/Header";

const PostWrite = (props) => {
  const history = useHistory();
  const is_cookie = getCookie('is_login')

  if (!is_cookie) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Header></Header>
      <Grid margin="10% 0px 0px 0px">
        <Input label="제목" placeholder="제목을 입력 해주세요"></Input>
        <Input
          label="내용"
          placeholder="내용을 입력 해주세요"
          multiLine
        ></Input>
      </Grid>
      <Grid is_flex margin="40px 0px 40px 0px" center>
        <Button width="20vw" margin="0px 0px 0px 28%">
          작성
        </Button>
        <Button
          width="20vw"
          margin="0px 28% 0px 0px"
          _onClick={() => {
            history.push("/");
          }}
        >
          목록
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
