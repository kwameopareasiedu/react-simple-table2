import React from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
  from {
    transform: translate(-100%, 0)
  }
  to {
    transform: translate(calc(7 / 2 * 100%), 0)
  }
`;

export const LinearProgressRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  overflow: hidden;
  background: linear-gradient(
    to right,
    #007db6,
    #0091b2,
    #009c9e,
    #00a77e,
    #22b24c,
    #60b031,
    #a5b62e
  );
`;

export const LinearProgressBar = styled.div`
  position: absolute;
  width: calc(100% * 2 / 7);
  height: 100%;
  display: flex;
  animation: ${move} 2s linear infinite;
  background-color: white;
`;

export const LinearProgress = (): JSX.Element => {
  return (
    <LinearProgressRoot>
      <LinearProgressBar />
    </LinearProgressRoot>
  );
};
