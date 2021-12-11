// EditPost.js

// *** 패키지 import
import React from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { Grid, Button, Input, Image, Text } from "../elements/index";
import Header from "../components/Header";

const EditPost = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const [contents, setContents] = React.useState("");

  // 수정 할 게시글 정보
  const wasTitle = useSelector((state) => state.post.title);
  const wasContent = useSelector((state) => state.post.content);
  const wasImageUrl = useSelector(
    (state) => `http://3.37.36.119${state.post.imageUrl}`
  );
  // 내용 onchange 함수
  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const postId = params.postId;
  // 글 수정하기 실행함수
  const edit = () => {
    window.alert("게시물 수정이 완료 되었습니다!");
    dispatch(postActions.editPostDB(postId, contents, wasImageUrl));
    window.location.href="/feed";
  }; // 히스토리 경로 수정한 글로 만들어보자

  return (
    <React.Fragment>
      <Header></Header>
      <Grid margin="2% 0px 0px 0px"></Grid>
      <Grid margin="1% 0px 1% 0px">
        <Grid is_flex>
          {wasImageUrl !== null ? (
            <Image
              src={wasImageUrl}
              alt="게시물 사진"
              shape="rectangle"
              width="50%"
            ></Image>
          ) : (
            <Image
              src="https://blog.kakaocdn.net/dn/yNtgW/btrmKkQHuOa/OleSub2Kfz7nKcaA54M3Jk/img.gif"
              alt="게시물 사진"
              shape="rectangle"
              width="50%"
              border="2px solid black"
            ></Image>
          )}
        </Grid>
      </Grid>
      <Grid margin="2% 0px 0px 0px">
        <Grid>
          <p style={{ width: "45%", margin : "auto", marginBottom : "2%" }}>{wasTitle}</p>
          <Input rows="10" postMultiLine _onChange={changeContents}>
            {wasContent}
          </Input>
        </Grid>
      </Grid>
      <Grid is_flex margin="40px 0px 40px 0px" center>
        <Button width="20vw" margin="0px 0px 0px 28%" _onClick={edit}>
          수정
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

export default EditPost;
