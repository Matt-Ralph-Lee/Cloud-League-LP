import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));

const cursor = document.getElementById("cursor");
const follower = document.getElementById("follower");

document.addEventListener("mousemove", function (e) {
  cursor.style.transform =
    "translate(" + e.clientX + "px, " + e.clientY + "px)";
});

document.addEventListener("mousemove", function (e) {
  follower.style.transform =
    "translate(" + e.clientX + "px, " + e.clientY + "px)";
});
