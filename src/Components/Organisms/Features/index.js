import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import CrossImage from "../../../Resources/image/Union.png";

export const Features = () => {
  const elOne = useRef(null);
  const elTwo = useRef(null);
  const elThree = useRef(null);
  const options = {
    threshold: 0.4,
    triggerOnce: true,
  };
  useEffect(() => {
    const observerOne = new IntersectionObserver(showOne, options);
    const observerTwo = new IntersectionObserver(showTwo, options);
    const observerThree = new IntersectionObserver(showThree, options);

    observerOne.observe(elOne.current);
    observerTwo.observe(elTwo.current);
    observerThree.observe(elThree.current);

    function showOne(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elOne.current.style.animation = "slideInLeft 0.6s ease-out forwards";
        }
      });
    }
    function showTwo(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (window.innerWidth > 510) {
            elTwo.current.style.animation =
              "slideInRight 0.6s ease-out forwards";
          } else {
            elTwo.current.style.animation =
              "slideInLeft 0.6s ease-out forwards";
          }
        }
      });
    }
    function showThree(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elThree.current.style.animation =
            "slideInLeft 0.6s ease-out forwards";
        }
      });
    }
  }, []);
  return (
    <>
      <div className="features-page">
        <div className="features-title">FEATURES</div>
        <div className="feature-one" ref={elOne}>
          <div className="feature-number">01.</div>
          <div className="feature-title">Hybrid Development</div>
          <div className="feature-content">
            <div className="feature-section">
              <div>開発</div>
              <img src={CrossImage} alt="" className="cross-image" />
              <div>デザイン</div>
              <img src={CrossImage} alt="" className="cross-image" />
              <div>マーケ</div>
            </div>
            <div className="feature-explanation">
              3つのバランスの取れた少人数チームで、
            </div>
            <div className="feature-explanation">
              短期間でプロダクト開発のサイクルを回す。
            </div>
          </div>
        </div>
        <div className="feature-two" ref={elTwo}>
          <div className="feature-number">02.</div>
          <div className="feature-title">Touch the Cutting Edge</div>
          <div className="feature-content">
            <div className="feature-section">
              多様な分会で、最新技術を深掘り。
            </div>
            <div className="coffee-house">
              <div className="coffee-house-title">
                <div className="square-bullet"></div>
                <div className="coffee-house-name">Crypto</div>
              </div>
              <div className="coffee-house-content">
                WEB3.0関連企業でインターンをするメンバーが、
              </div>
              <div className="coffee-house-content">
                クリプト・NFTの基礎知識を解説。
              </div>
            </div>
            <div className="coffee-house">
              <div className="coffee-house-title">
                <div className="square-bullet"></div>
                <div className="coffee-house-name">Security</div>
              </div>
              <div className="coffee-house-content">
                詐欺やサイバー攻撃を防ぐために、
              </div>
              <div className="coffee-house-content">
                情報セキュリティの脆弱性とその対策を学ぶ。
              </div>
            </div>
          </div>
        </div>
        <div className="feature-three" ref={elThree}>
          <div className="feature-number">03.</div>
          <div className="feature-title">Competitive Melting Pot</div>
          <div className="feature-content">
            <div className="feature-section">
              開発すれば開発する分だけ、
              <br />
              経験値が増える独自のシステムを導入。
            </div>
            <div className="feature-section">
              日本各地に限らず海外に在住しているメンバーも多く、
              <br />
              コミュニティの視野の広さ、情報の多様性を維持。
            </div>
            <div className="feature-section"></div>
          </div>
        </div>
      </div>
    </>
  );
};
