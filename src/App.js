import "./App.css";
import React, { useEffect, useState } from "react";
import { FirstBackground } from "./Components/FirstBackground";
import { useInView } from "react-intersection-observer";
import { Fly } from "./Components/Fly";

const App = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <>
      <div className="container">
        <FirstBackground />
      </div>
      <div className="place-holder"></div>
      <div className="flySwitch" ref={ref}></div>
      {inView && <Fly />}
    </>
  );
};

export default App;
