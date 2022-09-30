import React from "react";
import "./button.css";
import styled from "styled-components";

function Button4({ lastClicked }) {
  return (
    <Div>
      <Text>Have you completed the service?</Text>
      <Buttons>
        <Button onClick={lastClicked}>Yes</Button>
        <button>No</button>
      </Buttons>
    </Div>
  );
}

export default Button4;
const Div = styled.div`
  margin-left: 18%;
  margin-top: 6.5%;
  display: grid;
`;
const Text = styled.div``;
const Buttons = styled.div`
  margin-top: 4%;
`;
const Button = styled.button``;
