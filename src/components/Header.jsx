import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import vector from "../img/Vector.png";
function Header() {
  return (
    <Heading>
      <Logo />
      <HeadingText1>
        <h1>Classroom Profile</h1>
      </HeadingText1>
      <HeadingText2>
        <h3>Go to classroom</h3>
        <Vector />
      </HeadingText2>
    </Heading>
  );
}

export default Header;

const Heading = styled.div`
  position: absolute;
  width: 100%;
  height: 75px;
  left: 0px;
  top: 0px;
  background: #333333;
  color: white;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 200;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  background-image: url(${logo});
  height: 40px;
  width: 158px;
  left: 150px;
  margin-left: 120px;
  cursor: pointer;
  :hover {
    border: 1px solid blue;
  }
`;
const HeadingText1 = styled.div`
  font-size: 13px;
  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`;
const HeadingText2 = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-right: 180px;
  cursor: pointer;
  h3 {
    &:hover {
      text-decoration: underline;
      text-decoration-color: blue;
    }
  }
`;
const Vector = styled.div`
  background-image: url(${vector});
  height: 12px;
  width: 6px;
  margin-left: 15px;
  :hover {
    color: blue;
  }
`;
