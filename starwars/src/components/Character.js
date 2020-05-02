// imports
import React from "react";
import styled from "styled-components";

//styled component

const StyledHeading = styled.h1`
  color: #7fffd4;
`;

// Write your Character component here

const Character = (props) => {
  console.log("Props from the apps.js file ", props);
  return (
    <div>
      <StyledHeading>{props.rmData.name}</StyledHeading>
      <img src={props.rmData.image} />
    </div>
  );
};

//export file to get it to the APP.js file
export default Character;
