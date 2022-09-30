import React from "react";
import styled from "styled-components";
import Button1 from "./button/Button1";
import Button2 from "./button/Button2";
import Button3 from "./button/Button3";
import Button4 from "./button/Button4";
import "./button/button.css";
import CardContent from "./CardContent";
import ticked from "../img/ticked.svg";
import back from "../img/back.png";
import vector from "../img/Vector.png";
import cancel from "../img/cancel.png";
import { Link } from "react-router-dom";

const DEFAULT_IS_CLICKED = false;

function RightBody() {
  const [route, setRoute] = React.useState(false);

  const success = () => setRoute(true);
  //////

  // const [isActive, setActive] = useState("false");

  // const handleToggle = () => {
  //   setActive(!isActive);
  // };
  /////////
  //Yes Btn
  const [isClickedYes, setIsClickedYes] = React.useState(DEFAULT_IS_CLICKED);

  const onClickYes = () => {
    setIsClickedYes(true);
  };
  //Return icon btn
  const onClickReturn = () => {
    setIsClickedYes(false);
  };
  //No Button

  ////////////////////////////////////////////////////////////////
  //the second button, graduate btn
  const [graduate, setGraduate] = React.useState(false);

  const noClicked = () => {
    setGraduate(true);
  };
  const onCLickReturn = () => {
    setGraduate(false);
  };
  ///////////////////////////////////////
  //the third button 3
  const [postGraduate, setPostGraduate] = React.useState(false);
  const pgRequired = () => {
    setPostGraduate(true);
  };
  ///////////////////////////////////
  const [lastBtn, setLastBtn] = React.useState(false);

  const lastClicked = () => {
    setLastBtn(true);
  };

  return (
    <Card>
      <SmallCircle />
      <Div>
        <CardContent number={"1."} title={"Course of study in school:"} />
        <CardContent number={"2."} title={"Are you a student?"} />
        <div>
          {isClickedYes ? (
            <InputCont>
              <TickImg src={ticked} />
              <Tick>Yes</Tick>
              <Input1 name="text" placeholder="course studied in school" />
              <Input2
                type="text"
                onFocus={(e) => {
                  e.currentTarget.type = "date";
                  e.currentTarget.focus();
                }}
                placeholder="Expected graduation date"
              />
              <ReturnBtn src={back} onClick={onClickReturn} />
            </InputCont>
          ) : (
            <Button1 onClickYes={onClickYes} />
          )}
        </div>
        <Sec1>
          <CardContent number={"3."} title={"Did you graduate?"} />
          <div>
            {graduate ? (
              <>
                <Input3 type="text" placeholder="Current Occupation" />
                <ReturnBtn2 src={back} onClick={onCLickReturn} />
                <NoContainer>
                  <CancelBtn />
                  <TextNo>No</TextNo>
                </NoContainer>
              </>
            ) : (
              <Button2 noCLicked={noClicked} />
            )}
          </div>
        </Sec1>
        <Sec2>
          <CardContent
            number={"4."}
            title={"Does your country require post graduational service?"}
          />
          {postGraduate ? (
            <>
              {lastBtn ? (
                <>
                  <Yes2>Yes</Yes2>
                  <Ticked2 src={ticked} />
                  <Container>
                    <Text>Have you completed?</Text>
                    <Ticked src={ticked} />
                    <Yes>Yes</Yes>
                  </Container>
                  <Connect />
                  <NextTxt>Next</NextTxt>
                  <Vector />

                  <Link to="/nextpage1">
                    <NextBtn />
                  </Link>
                </>
              ) : (
                <Button4 lastClicked={lastClicked} />
              )}
            </>
          ) : (
            <Button3 pgRequired={pgRequired} />
          )}
        </Sec2>
      </Div>
    </Card>
  );
}

export default RightBody;

const Div = styled.div`
  margin-top: -6%;
`;
const Card = styled.div`
  position: absolute;
  width: 659px;
  height: 684px;
  left: 650px;
  top: 220px;
  background: #ffffff;
  box-shadow: 0px 4px 29px #f0f3ff;
  border-radius: 35px;
  &:hover {
    border: 1px solid blue;
  }
`;
const SmallCircle = styled.div`
  position: absolute;
  height: 32px;
  width: 32px;
  left: 92%;
  top: 3%;
  border-radius: 0px;

  background: linear-gradient(180deg, #800165 0%, #d3014e 100%);
  border-radius: 50px;
  &:hover {
    border: 1px solid blue;
  }
`;
const Sec1 = styled.div`
  margin-top: -11%;
`;
const Sec2 = styled.div`
  margin-top: -12%;
`;
const InputCont = styled.div`
  margin-left: 15%;
  margin-top: 3%;
`;
const Input1 = styled.input`
  width: 220px;
  height: 53px;
  left: 15%;
  top: 456px;
  background: #f1f3fd;
  border-radius: 17px;
  ::placeholder {
    padding: 10px;
  }
  &:hover {
    border: 1px solid blue;
  }
`;
const Input2 = styled(Input1)`
  width: 220px;
  margin-left: 3%;
  cursor: pointer;
  &:hover {
    border: 1px solid blue;
  }
`;
const Tick = styled.div`
  position: absolute;
  right: 50.5%;
  top: 31%;
`;
const TickImg = styled.img`
  position: absolute;
  width: 25px;
  height: 18px;
  background-size: cover;
  background-repeat: no-repeat;
  left: 41.5%;
  top: 31.5%;
`;
const ReturnBtn = styled.img`
  border: none;
  position: absolute;
  top: 42%;
  right: 10%;
  width: 20px;
  height: 14px;
  cursor: pointer;
`;

const Input3 = styled.input`
  width: 220px;
  height: 53px;
  margin-left: 15%;
  margin-top: 3%;
  background: #f1f3fd;
  border-radius: 17px;
  ::placeholder {
    padding: 10px;
  }
  &:hover {
    border: 1px solid blue;
  }
`;
const ReturnBtn2 = styled(ReturnBtn)`
  top: 62%;
  right: 45%;
`;

const Container = styled.div`
  display: flex;
`;
const Text = styled.div`
  width: 196px;
  height: 31px;
  margin-left: 20%;
  margin-top: 7%;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #30302e;
`;
const Yes = styled.text`
  position: absolute;
  width: 32px;
  height: 23px;
  left: 54%;
  top: 82.3%;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #cc4174;
`;
const Yes2 = styled(Yes)`
  position: absolute;
  top: 71.3%;
  left: 88%;
`;
const Ticked = styled(TickImg)`
  position: absolute;
  top: 82.8%;
  left: 48.5%;
  width: 20px;
  height: 12px;
  cursor: pointer;
`;
const Ticked2 = styled(Ticked)`
  position: absolute;
  top: 72%;
  left: 82%;
`;
const NextBtn = styled.button`
  width: 200px;
  height: 65px;
  margin-left: 260px;
  margin-top: 58px;
  background: #066aef;
  box-shadow: 0px 4px 14px rgba(51, 157, 255, 0.22);
  border-radius: 6px;
`;
const NextTxt = styled.div`
  position: absolute;
  width: 88px;
  height: 20px;
  left: 48.5%;
  top: 99%;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`;
const Connect = styled.div`
  position: absolute;
  width: 41px;
  height: 42px;
  left: 11%;
  top: 76.5%;
  border-left: 1px dashed #cad3ff;
  border-bottom: 1px dashed #cad3ff;
`;

const Vector = styled.div`
  position: absolute;
  background-image: url(${vector});
  background-repeat: no-repeat;
  width: 13px;
  height: 16px;
  top: 99.9%;
  left: 60%;
  cursor: pointer;
`;
const CancelBtn = styled.div`
  background-image: url(${cancel});
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 20px;
  margin-top: 3.95px;
`;
const TextNo = styled.div``;
const NoContainer = styled.div`
  position: absolute;
  display: flex;
  margin-left: 40%;
  margin-top: -105.8px;
`;
