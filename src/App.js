import "./App.css";
import React from "react";
import { Fly } from "./Components/Organisms/Fly";
import { Logo } from "./Components/Organisms/Logo";
import { Concept } from "./Components/Organisms/Concept";
import { Features } from "./Components/Organisms/Features";

const App = () => {
  return (
    <div className="wrapper">
      <Logo />
      <Fly />
      <Concept />
      <Features />
    </div>
  );
};

export default App;
