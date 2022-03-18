import "./Fly.css";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

export const Fly = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  const [offset, setOffset] = useState(0);

  window.addEventListener("scroll", parallax);

  function parallax() {
    if (ref) {
      setOffset(window.scrollY);
    }
  }

  const style = {
    backgroundPosition: `0 ${offset / 3}px`,
  };

  return (
    <>
      <div className="flyPage" ref={ref}>
        <div className="fly" style={style}>
          <span className="F">F</span>
          <span className="L">L</span>
          <span className="Y">Y</span>
          <span className="piriod">.</span>
        </div>
      </div>
      <div className="place-holder"></div>
    </>
  );
};
