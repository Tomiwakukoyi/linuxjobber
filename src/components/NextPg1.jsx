import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LeftBody from "./LeftBody";
import RangeComp from "./RangeComp";
import NextPg2 from "./NextPg2";

function NextPg1() {
  return (
    <Main>
      <LeftBody />
      <RangeComp />
      <Routes>
        <Route path="/nextpage2" element={<NextPg2 />} />
      </Routes>
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
  width: 400px;
  height: 400px;
`;
