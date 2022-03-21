import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import LogoImage from "../../../Resources/image/cloud-league-logo-white.png";

export const Logo = () => {
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
  useEffect(() => {
    const observer = new IntersectionObserver(showElements, options);

    observer.observe(ref.current);

    function showElements(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setOffset(entry.intersectionRatio);
        }
      });
    }
  }, []);

  const style = {
    opacity: offset,
  };
  return (
    <>
      <div className="logo-page">
        <img src={LogoImage} alt="" className="logo-image" style={style} />
        <div className="logo" style={style} ref={ref}>
          <div className="google">GOOGLE</div>
          <div className="developer">DEVELOPER</div>
          <div className="student-clubs">
            <div className="student">STUDENT</div>
            <div className="clubs">CLUBS</div>
          </div>
          <div className="cloud">
            <div className="cl">CL</div>
            <div className="logo-circle"></div>
            <div className="ud">UD</div>
          </div>
          <div className="league">LEAGUE</div>
        </div>
      </div>
    </>
  );
};
