// imports
import React from "react";

// Write your Character component here

const Character = (props) => {
  console.log("Props from the apps.js file ", props);
  return (
    <div>
      {}
      <h1>{/*props.rmData.name*/}</h1>
      <img src={/*props.rmData.image*/} />
    </div>
  );
};

//export file to get it to the APP.js file
export default Character;
