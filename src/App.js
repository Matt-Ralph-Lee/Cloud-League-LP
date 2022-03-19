import "./App.css";
import React, { useEffect, useState } from "react";
import { FirstBackground } from "./Components/FirstBackground";
import { useInView } from "react-intersection-observer";
import { Fly } from "./Components/Fly";
import { Logo } from "./Components/Logo";

const App = () => {
  return (
    <>
      {/* <div className="container">
        <FirstBackground />
      </div>
      <div className="place-holder"></div> */}
      <div className="wrapper">
        <Logo />
        <Fly />
      </div>
    </>
  );
};

export default App;
