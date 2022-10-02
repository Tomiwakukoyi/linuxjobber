import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ellipse from "../img/ellipse.png";
import Range from "./Range";

function RangeComp() {
  const titlesArr = [
    "Cybersecurity",
    "Developer",
    "DevOps",
    "Designer",
    "Project Manager",
    "Product Manager",
    "Marketer",
    "Writer",
  ];
  console.log(titlesArr);
  return (
    <Container>
      <Circle />
      <Heading>Score your level of interest in these job titles:</Heading>
      <Divs>
        <Div1>
          <Range title={titlesArr[0]} />
          <Range title={titlesArr[1]} />
          <Range title={titlesArr[2]} />
          <Range title={titlesArr[3]} />
        </Div1>
        <Div2>
          <Range title={titlesArr[4]} />
          <Range title={titlesArr[5]} />
          <Range title={titlesArr[6]} />
          <Range title={titlesArr[7]} />
        </Div2>
      </Divs>
      <Link to="/nextpage2">
        <Button>Done</Button>
      </Link>
    </Container>
  );
}

export default RangeComp;

const Container = styled.div`
  position: absolute;
  width: 1000px;
  height: 650px;
  left: 650px;
  top: 220px;
  box-shadow: 0px 4px 29px #f0f3ff;
  border-radius: 35px;
  :hover {
    border: 1px solid black;
  }
`;
const Circle = styled.div`
  position: absolute;
  background-image: url(${ellipse});
  width: 30px;
  height: 30px;
  right: 1.8%;
  top: 2%;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Heading = styled.div`
  position: absolute;
  width: 400px;
  height: 31px;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #30302e;
  left: 8%;
  top: 7.5%;
`;
const Divs = styled.div`
  display: flex;
  flex-direction: row;
`;
const Div1 = styled.div`
  margin-top: 3%;
`;

const Div2 = styled.div`
  position: absolute;
  margin-left: 560px;
  margin-top: 3%;
`;

const Button = styled.button`
  position: absolute;
  width: 200px;
  height: 65px;
  left: 400px;
  bottom: -30px;
  color: white;
  background: #066aef;
  box-shadow: 0px 4px 14px rgba(51, 157, 255, 0.22);
  border-radius: 6px;
`;
