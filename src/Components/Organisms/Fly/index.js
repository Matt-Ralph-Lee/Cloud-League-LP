import "./style.css";
import React, { useEffect, useRef, useState } from "react";

export const Fly = () => {
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.5,
  // });

  const [offset, setOffset] = useState(0);
  const ref = useRef(null);
  const options = {
    threshold: buildThresholdList(),
  };

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 100;

    for (let i = 1; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }
    return thresholds;
  }

  let preY = 0;
  let preRatio = 0;

  function calculate(ratio) {
    let y = window.scrollY;
    let flug =
      (((y - preY) / Math.abs(y - preY)) * (ratio - preRatio)) /
      Math.abs(ratio - preRatio);
    setOffset(350 * (1 + Math.sqrt(1 - ratio ** 2) * flug) - 500);
    preRatio = ratio;
    preY = y;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(showElements, options);

    observer.observe(ref.current);

    function showElements(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          calculate(entry.intersectionRatio);
        }
      });
    }
  }, []);

  const style = {
    backgroundPosition: `0 ${offset / 3}px`,
  };

  return (
    <>
      {/* <div className="fly-page" ref={ref}> */}
      <div className="fly-page" ref={ref}>
        <div className="fly" style={style}>
          <span className="F">F</span>
          <span className="L">L</span>
          <span className="Y">Y</span>
          <span className="piriod">.</span>
        </div>
      </div>
    </>
  );
};
