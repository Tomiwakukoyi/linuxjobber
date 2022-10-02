import React from "react";
import styled from "styled-components";
import profile from "../img/profile.png";
import ProfileInputs from "./ProfileInputs";
import ellipse from "../img/ellipse.png";
import done from "../img/done.png";
import ProfileRange from "./ProfileRange";

function ProfileResult() {
  return (
    <Div>
      <Profile>
        <ProfileBg />
        <ProfileImg />
      </Profile>
      <Text>Your Profile</Text>
      <ProfileInfo1>
        <Ellipse />
        <Done />
        <ProfileInputs
          title1={"First Name"}
          title2={"Last Name"}
          title3={"Email"}
          firstname={"Tomiwa"}
          lastname={"Kukoyi"}
          email={"Tomiwakukoyi07@gmail.com"}
        />
      </ProfileInfo1>
      <ProfileInfo2>
        <Ellipse />
        <Done />
        <ProfileInputs
          title1={"Course of Study"}
          title2={"I am a student"}
          title3={"Graduation date"}
          firstname={"Mathematics"}
          lastname={"Web Developer"}
          email={"June, 2023"}
        />
      </ProfileInfo2>
      <RangeCont>
        <ProfileInfo3>
          <ProfileRange title={"My Interest:"} value={8} text={"Developer"} />
        </ProfileInfo3>
        <ProfileInfo4>
          <ProfileRange value={10} text={"Project manager"} />
        </ProfileInfo4>
      </RangeCont>
    </Div>
  );
}

export default ProfileResult;

const Div = styled.div`
  width: 1300px;
  height: 600px;
  margin-top: 14.5%;
  margin-left: -3%;
  border-radius: 10px;
`;

const Profile = styled.div``;
const ProfileBg = styled.div`
  position: absolute;
  width: 53px;
  height: 53px;

  margin-top: 15px;
  margin-left: 20px;
  background: #8d8f97;
  border-radius: 17px;
`;
const ProfileImg = styled.image`
  position: absolute;
  background-image: url(${profile});
  height: 18px;
  width: 17px;
  margin-top: 29px;
  margin-left: 37px;
`;
const Text = styled.div`
  position: absolute;
  margin-top: 25px;
  left: 36.5%;
  width: 102px;
  height: 31px;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 155.02%;
  color: black;
`;

const ProfileInfo1 = styled.div`
  position: absolute;
  width: 980px;
  height: 199px;
  left: 670px;
  top: 316px;
  background: #ffffff;
  box-shadow: 0px 4px 29px #f0f3ff;
  border-radius: 35px;
`;
const ProfileInfo2 = styled(ProfileInfo1)`
  top: 560px;
`;
const ProfileInfo3 = styled.div`
  top: 800px;
`;
const ProfileInfo4 = styled.div`
  margin-left: 500px;
  top: 50px;
`;
const Ellipse = styled.div`
  background-image: url(${ellipse});
  width: 32px;
  height: 32px;
  margin-left: 930px;
  margin-top: 15px;
  border-radius: 100%;
  background: linear-gradient(180deg, #800165 0%, #d3014e 100%);
`;
const Done = styled.div`
  background-image: url(${done});
  width: 25px;
  height: 25px;
  margin-left: 935px;
  margin-top: -2.7%;
  background-repeat: none;
  background-size: contain;
`;
const RangeCont = styled.div`
  position: absolute;
  width: 980px;
  height: 215px;
  left: 670px;
  top: 800px;
  background: #ffffff;
  box-shadow: 0px 4px 29px #f0f3ff;
  border-radius: 35px;
`;
