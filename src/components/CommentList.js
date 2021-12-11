// CommentList.js

// *** 패키지 import
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import { Grid, Button, Text, Input } from "../elements/index";

const CommentList = (props) => {

  const comment = useSelector((state) => state.post.comments);
  const commentInfo = Object.values(comment)
  // post modules에서 가져온 정보가 {0:{}, 1:{}} 형태로 되어 있어서 map을 돌릴 수 없었다.
  // 처음에는 Object.key(comment)로 했었는 데 그럴 경우 {0,1,2,3...}이 되서
  // Object.value(comment)로 했더니 값들이 잘 들어갔다.

  return (
    <React.Fragment>
      {commentInfo.map((p) => {
        return <CommentItem key={p.commentId} {...p}></CommentItem>;
      })}
    </React.Fragment>
  );
};

const CommentItem = (props) => {
  const { commentId, comment, createdAt } = props;
  return (
    <React.Fragment>
      <Grid is_flex margin="0px 0px 0px 24%" width="50%">
        <Grid>
          <Text bold>익명</Text>
        </Grid>
        <Grid>
          <Text margin="0px">{comment}</Text>
        </Grid>
        <Grid>
          <Text margin="0px">{createdAt}</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

CommentItem.defaultProps = {
  commentId: 1,
  comment: "기본 댓글 내용",
  createdAt: "날짜",
};

export default CommentList;
