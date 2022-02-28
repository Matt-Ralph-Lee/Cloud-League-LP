import styled, { keyframes } from "styled-components";

const stretch = keyframes`
  100% {
    height: 0%;
  }
`;

export const Line = styled.div`
  width: 10px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  background: black;
  position: absolute;
  z-index: 0;
  transform-origin: center bottom;
  transform: translate(-50%, -100%) rotate(${(props) => props.angle}deg);
  &::after {
    content: "";
    width: 20px;
    height: 110%;
    background: white;
    display: block;
    transform: translate(-5px, -2px);
    animation: ${stretch} ${(props) => props.time}ms ${(props) => props.delay}ms
      ease-in-out forwards;
  }
`;
