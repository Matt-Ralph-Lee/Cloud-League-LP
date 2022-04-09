import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Concept = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <>
      <div className="concept-page" ref={ref}>
        {inView && (
          <>
            <div className="concept-title">
              <span>CONCEPT</span>
            </div>
            <div className="concept">
              <div className="concept-first-line">
                <span className="concept-google">Google Developers</span>
                の支援のもとで、
              </div>
              <div className="concept-second-line">大学の壁を超え、</div>
              <div className="concept-third-line">少数精鋭で、</div>
              <div className="concept-forth-line">アジャイルに、</div>
              <div className="concept-fifth-line">
                プロダクト開発を行う学生リーグ
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
