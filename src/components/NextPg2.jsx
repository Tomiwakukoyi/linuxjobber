import React from "react";
import styled from "styled-components";
import LeftBody from "./LeftBody";
import ProfileResult from "./ProfileResult";
function NextPg2() {
  return (
    <Div>
      <LeftBody />
      <ProfileResult />
    </Div>
  );
}

export default NextPg2;

const Div = styled.div`
  display: flex;
`;
