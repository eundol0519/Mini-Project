// PostWrtie.js

// *** 패키지 import
import React from "react";
import { useHistory } from "react-router";

import { Grid, Button, Text, Input } from "../elements/index";
import Header from "../components/Header";

const PostWrite = (props) => {

  const history = useHistory();

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
        <Button width="20vw" margin="0px 28% 0px 0px" _onClick={()=>{history.push('/')}}>
          목록
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
