import React from "react";
import styled from "styled-components";
import { Slider } from "@mui/material";

function ProfileRange(props) {
  return (
    <Div>
      <H1>{props.title}</H1>
      <TextHeader>
        <Text>{props.text}</Text>
        <Value>{props.value}/10</Value>
      </TextHeader>
      <Slider
        style={{
          width: 294,
          color: "rgba(128, 1, 101, 1)",
          position: "absolute",
          marginLeft: 62,
          marginTop: 130,
        }}
        min={0}
        max={10}
        value={props.value}
      />

      {/* <Input type="range" value={props.value} min="0" max="10" /> */}
    </Div>
  );
}

export default ProfileRange;
const Div = styled.div``;

const H1 = styled.div`
  position: absolute;
  width: 120px;
  height: 26px;
  margin-top: 60px;
  margin-left: 62px;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 155.02%;
  color: #30302e;
`;
const TextHeader = styled.div``;
const Text = styled.div`
  position: absolute;
  width: 120px;
  height: 76px;
  margin-left: 62px;
  margin-top: 8%;

  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 422.02%;
  /* identical to box height, or 76px */
  color: #acb7eb;
`;

const Value = styled(Text)`
  margin-left: 320px;
  color: rgba(0, 40, 81, 1);
`;
