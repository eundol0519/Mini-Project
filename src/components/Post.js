// Post.js

// *** 패키지 import
import React from "react";

import { Grid, Button, Text, Input } from "../elements/index";
import Card from "react-bootstrap/Card";

const Post = (props) => {
  const { noWrap, _onClick } = props;

  if (noWrap) {
    return (
      <div
        style={{
          width: "100%",
          padding: "1% 0px 0px 0px",
          borderRadius: "10px",
          margin: "1% 1% 1% 1%",
          height: "30px",
          border: "1px solid black",
        }}
      >
        <Grid _onClick={_onClick} is_flex>
          <Grid>
            <Text margin="0px">{props.comment}</Text>
          </Grid>
          <Grid>
            <Text margin="0px">{props.createdAt}</Text>
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Card
        border="dark"
        style={{
          width: "16rem",
          height: "250px",
          lineHeight: "100px",
          borderRadius: "10px",
          textAlign: "center",
          margin: "0% 1% 1% 1%",
          border: "1px solid black",
        }}
        onClick={_onClick}
      >
        <Card.Header
          style={{
            width: "200px",
            height: "120px",
            textAlign: "center",
            margin: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          [{props.title}]
        </Card.Header>
        <Card.Body>
          <Card.Text
            style={{
              width: "200px",
              height: "200px",
              textAlign: "center",
              margin: "auto",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {props.content}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
};

Post.defaultProps = {
  noWrap: false,
};

export default Post;
