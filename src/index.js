import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));

window.addEventListener("scroll", function () {
  let stage = document.querySelector(".stage");
  stage.style.transform = `translate(-50%, -50%) scale(${
    100 - (window.scrollY - 3960) ** 2 / 158400
  })`;
  console.log("縦スクロール：" + window.scrollY);
  if (window.scrollY > window.innerHeight * 1.5) {
    stage.remove();
    document.body.style.background = "black";
  }
});
