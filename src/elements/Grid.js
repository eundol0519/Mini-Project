// Grid.js

// *** 패키지 import
import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    height,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    flexFlow,
    justifyContent,
    noWrap,
    boxShadow,
  } = props;

  const styles = {
    boxShadow: boxShadow,
    justifyContent: justifyContent,
    is_flex: is_flex,
    width: width,
    margin: margin,
    height: height,
    padding: padding,
    bg: bg,
    center: center,
    flexFlow: flexFlow,
  };

  if (noWrap) {
    return (
      <React.Fragment>
        <NoWrap onClick={_onClick} {...styles}>
          {children}
        </NoWrap>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <GridBox onClick={_onClick} {...styles}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  boxShadow: null,
  justifyContent: false,
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  flexFlow: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-evenly; `
      : ""}
    ${(props) => (props.center ? `text-align: center;` : "")}
    ${(props) => (props.flexFlow ? "flex-flow : row wrap;" : "")}
    ${(props) =>
    props.justifyContent
      ? "justify-content: flex-start;"
      : "justify-content: space-evenly;"}
`;

const NoWrap = styled.div`
  width: 450px;
  border-radius: 15px;
  height: 60px;
  /* border: 1px solid black; */
  box-shadow: 0px 5px 16px rgba(180, 150, 150, 0.4);
  background-color: #fafafa;
  justify-content: flex-start;
`;

export default Grid;