import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Character from "./components/Character";

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the API in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

const App = () => {
  const [rmData, setRmData] = useState("");
  useEffect(() => {
    // Get single character read docs ... updated chose character 15
    Axios.get("https://rickandmortyapi.com/api/character/15")
      .then((response) => {
        console.log("rick and morty data response", response);
        setRmData(response.data);
      })
      .catch((error) => {
        console.log("rick and morty data error", error);
      });
  }, []);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character rmData={rmData} />
    </div>
  );
};

export default App;
