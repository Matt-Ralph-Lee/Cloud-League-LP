import "./Fly.css";
import React, { useState } from "react";

export const Fly = (props) => {
  return (
    <>
      <div className="flyPage">
        <div className="fly">
          <span className="F">F</span>
          <span className="L">L</span>
          <span className="Y">Y</span>
          <span className="piriod">.</span>
          {/* <div className="fly-circle"></div> */}
        </div>
      </div>
    </>
  );
};
