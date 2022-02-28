import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const expand = keyframes`
  10%{
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const OuterCircle = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  animation: ${expand} ${(props) => props.time}ms ${(props) => props.delay}ms
    ease-in-out forwards;
  border-radius: 50%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%) scale(0.1);
  position: absolute;
  z-index: 1;
  opacity: 0;
`;

const WhiteCircle = styled.div`
  width: 75%;
  height: 75%;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerCircle = styled.div`
  width: 75%;
  height: 75%;
  border-radius: 50%;
  background: black;
`;

export const Circle = (props) => {
  return (
    <>
      <OuterCircle
        size={props.size}
        x={props.x}
        y={props.y}
        time={props.time}
        delay={props.delay}
      >
        <WhiteCircle>
          <InnerCircle />
        </WhiteCircle>
      </OuterCircle>
    </>
  );
};
