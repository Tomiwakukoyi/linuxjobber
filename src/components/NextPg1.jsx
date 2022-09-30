import React from "react";
import styled from "styled-components";
import LeftBody from "./LeftBody";
import Ratings from "./Ratings";

function NextPg1() {
  return (
    <Main>
      <LeftBody />
      <Ratings />
    </Main>
  );
}

export default NextPg1;

const Main = styled.div`
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: black;
  width: 400px;
  height: 400px;
`;
