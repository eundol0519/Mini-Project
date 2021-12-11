// Post.js

// *** 패키지 import
import React from "react";

import { Grid, Button, Text, Input } from "../elements/index";
import Card from "react-bootstrap/Card";

const Post = (props) => {
  const { noWrap, _onClick } = props;

  if (noWrap) {
    return (
      <div style={{ marginBottom: "2%" }}>
        <Grid padding="10px" _onClick={_onClick} noWrap is_flex>
          <Grid>
            <Text width="350px" margin="5% 0% 0% 11%">
              {props.comment}
            </Text>
          </Grid>
          <Grid>
            <Text width="350px" margin="5% 0% 0% 11%">
              {props.createdAt}
            </Text>
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
          borderRadius: "30px",
          textAlign: "center",
          margin: "1% 3% 2% 1%",
          // border: "1px solid black",
          backgroundColor: "#FAFAFA",
          boxShadow: "0px 5px 16px rgba(180, 150, 150, 0.4)",
        }}
        onClick={_onClick}
      >
        <Card.Header
          style={{
            fontSize: "25px",
            width: "200px",
            height: "75px",
            textAlign: "left",
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
              textAlign: "left",
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