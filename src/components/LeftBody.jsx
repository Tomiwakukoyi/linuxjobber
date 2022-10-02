import React from "react";
import styled from "styled-components";
import tomiwa from "../img/tomiwa.jpg";
import camera from "../img/camera.png";
import point from "../img/point.png";
import profile from "../img/profile.png";
import vector from "../img/vector.svg";
import courses from "../img/courses.png";
import attendance from "../img/attendance.png";
import exit from "../img/exit.svg";

function LeftBody() {
  return (
    <Left>
      <Img />
      <CameraBg />
      <Camera />
      <Point />

      <Div>
        <HeadingText>Tommyk</HeadingText>
        <List>
          <ProfileSec>
            <VectorBg />
            <ProfileIcon />
          </ProfileSec>
          <Title>Profile</Title>
          <Vector />
        </List>
        <List2>
          <ProfileSec>
            <VectorBg />
            <CoursesIcon />
          </ProfileSec>
          <Title>Courses</Title>
          <Vector />
        </List2>
        <List3>
          <ProfileSec>
            <VectorBg />
            <AttendanceIcon />
          </ProfileSec>
          <Title>Attendance</Title>
          <Vector />
        </List3>
      </Div>
      <Logout>
        <ExitIcon />
        <LogoutP>Logout</LogoutP>
      </Logout>
    </Left>
  );
}

export default LeftBody;
const Left = styled.div`
  width: 300px;
  height: 500px;
  margin-top: 200px;
`;
const Div = styled.div`
  top: -160px;
`;
const Img = styled.div`
  background-image: url(${tomiwa});
  position: absolute;
  width: 180px;
  height: 220px;
  left: 190px;
  top: 220px;
  border-radius: 35px;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    border: 1px solid blue;
  }
`;
const CameraBg = styled.div`
  position: absolute;
  width: 44px;
  height: 39px;
  left: 260px;
  top: 420px;
  background: linear-gradient(180deg, #800165 0%, #d3014e 100%);
  border-radius: 100px;
  &:hover {
    border: 1px solid blue;
  }
`;
const Camera = styled.div`
  position: absolute;
  z-index: 100;
  height: 24px;
  width: 30px;
  background-image: url(${camera});
  left: 266.5px;
  top: 425px;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Point = styled.div`
  position: absolute;
  background-image: url(${point});
  height: 15px;
  width: 18px;
  top: 429px;
  left: 271px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeadingText = styled.div`
  position: absolute;
  width: 100px;
  height: 34px;
  left: 210px;
  top: 515px;
  color: #30302e;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`;

const List = styled.div`
  position: absolute;
  display: flex;
  width: 30px;
  height: 53px;
  left: 140px;
  top: 604px;
`;
const List2 = styled.div`
  position: absolute;
  width: 53px;
  height: 53px;
  left: 140px;
  top: 680px;
`;
const List3 = styled.div`
  position: absolute;
  display: grid;
  width: 53px;
  height: 53px;
  left: 140px;
  top: 756px;
`;
const ProfileSec = styled.div``;

const ProfileIcon = styled.div`
  position: absolute;
  height: 18px;
  width: 17px;
  background-image: url(${profile});
  left: 17px;
  top: 18px;
  color: #002851;
  background-size: cover;
  cursor: pointer;
  &:hover {
    border: 1px solid blue;
  }
`;
const CoursesIcon = styled(ProfileIcon)`
  background-image: url(${courses});
  width: 22px;
  cursor: pointer;
`;
const AttendanceIcon = styled(ProfileIcon)`
  background-image: url(${attendance});
  width: 25px;
  cursor: pointer;
`;
const Logout = styled.div`
  display: flex;
  cursor: pointer;
`;
const ExitIcon = styled.div`
  background-image: url(${exit});
  position: absolute;
  width: 20px;
  height: 20px;
  left: 200px;
  top: 842px;
  color: #acb7eb;
  cursor: pointer;
`;
const LogoutP = styled.div`
  position: absolute;
  width: 54px;
  height: 26px;
  left: 250px;
  top: 840px;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 155.02%;
  color: #acb7eb;
  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`;

const Title = styled.div`
  position: absolute;
  width: 57px;
  height: 31px;
  left: 100px;
  top: 17px;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #30302e;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`;
const Vector = styled.div`
  position: absolute;
  background-image: url(${vector});
  background-repeat: no-repeat;
  width: 10px;
  height: 14px;
  top: 22px;
  left: 225px;
`;
const VectorBg = styled.div`
  width: 53px;
  height: 53px;
  left: 241px;
  top: 604px;
  background: #f1f3fd;
  border-radius: 17px;
  cursor: pointer;
  &:hover {
    border: 1px solid blue;
  }
`;
