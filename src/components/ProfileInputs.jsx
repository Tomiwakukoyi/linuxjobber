import React from "react";
import styled from "styled-components";

function ProfileInputs(props) {
  return (
    <Div>
      <Inputs>
        <H1>{props.title1}:</H1>
        <Input1
          name="firstname"
          placeholder="First Name"
          value={props.firstname}
        />
        <H2>{props.title2}:</H2>
        <Input1
          name="lastname"
          placeholder="Last Name"
          value={props.lastname}
        />
        <H3>{props.title3}:</H3>
        <Input1
          name="Email"
          type="email"
          placeholder="Email"
          value={props.email}
        />
      </Inputs>
    </Div>
  );
}

export default ProfileInputs;
const Div = styled.div``;
const Inputs = styled.div``;
const Input1 = styled.input`
  position: relative;
  width: 224px;
  height: 53px;
  margin-left: 60px;
  margin-top: 60px;
  background: #f1f3fd;
  border-radius: 17px;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 155.02%;
  padding-left: 20px;
  color: #c5ccec;

  ::placeholder {
    padding: 20px;
    width: 83px;
    height: 26px;
    font-family: "HelveticaNeueCyr";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #c5ccec;
  }
`;
const H1 = styled.div`
  position: absolute;
  width: 120px;
  height: 26px;
  margin-left: 62px;
  margin-top: 32px;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 155.02%;
  color: #30302e;
`;
const H2 = styled(H1)`
  margin-top: -88px;
  margin-left: 38%;
`;
const H3 = styled(H1)`
  margin-top: -88px;
  margin-left: 70%;
`;
// const H4 = styled(H3)``;
// const SecondInputs = styled.div``;
// const Input2 = styled.div``;
