import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";
import NextPg2 from "./NextPg2";
import NextPg1 from "./NextPg1";

function Body() {
  return (
    <Main>
      <LeftBody />
      <Routes>
        <Route path="/" element={<RightBody />} />
        <Route path="/nextpage1" element={<NextPg1 />} />
        <Route path="/nextpage2" element={<NextPg2 />} />
      </Routes>
    </Main>
  );
}

export default Body;

const Main = styled.div`
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
