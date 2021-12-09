import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, border, width, height, padding } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin,
    border,
    width,
    height,
    padding,
  };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  border: false,
  width: "100%",
  height: "100%",
  padding: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  word-wrap: break-word;
`;

export default Text;
