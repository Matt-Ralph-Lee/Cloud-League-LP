import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));

let stage = document.querySelector(".stage");
let scale = 1;
let currentY = 0;
let y = currentY;

window.addEventListener("scroll", easeScroll);

function easeScroll() {
  currentY = window.pageYOffset;
  console.log(currentY);
  if (y < 1500) {
    window.cancelAnimationFrame(render);
    // window.removeEventListener("scroll", easeScroll);
    // stage.remove();
  }
}

window.requestAnimationFrame(render);

function render() {
  //We calculate our container position by linear interpolation method
  y = li(y, currentY, 0.07);

  y = Math.floor(y * 100) / 100;

  // stage.style.transform = `scale(${100 - (y - 3960) ** 2 / 158400})`;
  if (100 * Math.sin((y * Math.PI) / 7000) > 1) {
    stage.style.transform = `scale(${100 * Math.sin((y * Math.PI) / 7000)})`;
  }

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}
