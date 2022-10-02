// import React, { useState } from "react";
// import styled from "styled-components";
// import SliderComponent from "./SliderComponent";

// function Range() {
//   const [value, setValue] = useState(0);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   return (
//     <div>
//       <h2>{value}/10</h2>
//       <SliderComponent
//         value={value}
//         handleChange={handleChange}
//         min={0}
//         max={10}
//       />
//     </div>
//   );
// }

// export default Range;

import React, { useState } from "react";
import "./Range.css";
import styled from "styled-components";
import ReactSlider from "react-slider";

function Range(props) {
  const [currentValue, setCurrentValue] = useState(0);

  // const [slideValue, setSlideValue] = useState(false);

  return (
    <RangeComp>
      <ReactSlider
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        marks={1}
        min={0}
        max={10}
        defaultValue={0}
        value={currentValue}
        onChange={(value) => setCurrentValue(value)}
      />
      <Texts>
        <H4>{props.title}</H4>
        <H1>{currentValue}/10</H1>
      </Texts>
    </RangeComp>
  );
}

export default Range;
const RangeComp = styled.div`
  width: 70%;
  padding: 0;
  margin: 0;
  height: -20px;
`;
const Texts = styled.div`
  display: flex;
`;
const H4 = styled.div`
  margin-left: 10%;
  margin-top: -4%;
  width: 600px;
  color: #acb7eb;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
const H1 = styled.div`
  width: 30px;
  margin-top: -4%;
  margin-right: 350px;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #002851;
`;
