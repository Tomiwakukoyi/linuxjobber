import React, { useState } from "react";
import styled from "styled-components";

function CardContent(props) {
  return (
    <div>
      <Div>
        <Number>{props.number}</Number>
        <Title>{props.title}</Title>
        <InputField type="text" placeholder="Course of study" />
      </Div>
    </div>
  );
}

export default CardContent;
const Div = styled.div`
  display: grid;
`;

const Number = styled.div`
  width: 17px;
  height: 23px;
  margin-left: 10%;
  margin-top: 17%;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 112.52%;
  color: #cc4174;
`;

const Title = styled.div`
  width: 500px;
  height: 31px;
  margin-left: 15%;
  margin-top: -3.9%;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 155.02%;
  color: #30302e;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`;
const InputField = styled.input`
  position: absolute;
  width: 461px;
  height: 53px;
  left: 15%;
  top: 18.5%;
  background: #f1f3fd;
  border-radius: 17px;
  border: none;
  ::placeholder {
    width: 121px;
    height: 26px;
    padding: 30px;
    font-family: "HelveticaNeueCyr";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 155.02%;
    color: #c5ccec;
  }
  &:hover {
    border: 1px solid blue;
  }
`;
const Button = styled.button``;
