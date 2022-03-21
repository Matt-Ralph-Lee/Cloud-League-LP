import "./App.css";
import React from "react";
import { Fly } from "./Components/Organisms/Fly";
import { Logo } from "./Components/Organisms/Logo";
import { Concept } from "./Components/Organisms/Concept";

const App = () => {
  return (
    <div className="wrapper">
      <Logo />
      <Fly />
      <Concept />
    </div>
  );
};

export default App;
