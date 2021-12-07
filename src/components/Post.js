// Post.js

// *** 패키지 import
import React from "react";

import Card from "react-bootstrap/Card";

const Post = (props) => {
  return (
    <React.Fragment>
      <Card border="dark" style={{ width: "18rem", height:"15rem", border:"1px solid black", marginTop : "2%"}}>
        <Card.Header>제목</Card.Header>
        <Card.Body>
          <Card.Text>
            내용
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
};

export default Post;
