import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));

// let stage = document.querySelector(".stage");
// let container = document.querySelector(".container");
// let placeHolder = document.querySelector(".place-holder");

// let currentY = 0;
// let y = currentY;

// window.addEventListener("scroll", easeScroll);
// window.requestAnimationFrame(render);

// function easeScroll() {
//   currentY = window.pageYOffset;
//   console.log(currentY);
// }

// function render() {
//   y = li(y, currentY, 0.07);

//   y = Math.floor(y * 100) / 100;

//   if (100 * Math.sin((y * Math.PI) / 7000) > 1) {
//     stage.style.transform = `scale(${100 * Math.sin((y * Math.PI) / 7000)})`;
//   }

//   window.requestAnimationFrame(render);

//   if (y > 1200) {
//     window.cancelAnimationFrame(render);
//     container.remove(); //or container??
//     placeHolder.remove();
//     document.body.style.background = "#111111";
//   }
// }

// function li(a, b, n) {
//   return (1 - n) * a + n * b;
// }
