import "./App.css";
import React, { useState } from "react";
import { FirstBackground } from "./Components/FirstBackground";

const App = () => {
  return (
    <>
      <div className="container">
        <FirstBackground />
      </div>
      <div className="place-holder"></div>
    </>
  );
};

export default App;
