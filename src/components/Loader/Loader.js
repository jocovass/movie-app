import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotateZ(0deg);
    }
    100% {
       transform: rotateZ(360deg)
    }
`;

const borderFade = keyframes`
  0% {
    border-color: var(--clr-primary-light);
    box-shadow: none;
  }
  100% {
    border-color: var(--clr-info);
    box-shadow: 0 0 0 3px rgba(244, 173, 6, 0.5),
      0 0 0 6px rgba(244, 173, 6, 0.2);
  }
`;

const Wrapper = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .path {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 1px solid var(--clr-primary-light);
    position: relative;
    animation: ${borderFade} 1s ease-in-out infinite alternate;
  }

  .rotate-1,
  .rotate-2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 20%,
      #f9d60f 0%,
      var(--clr-info) 20%,
      #f9610f 75%
    );
  }

  .rotate-1 {
    animation: 1.8s ${spin} cubic-bezier(0, 0.63, 0.86, 0.39) infinite;
  }

  .rotate-2 {
    animation: 1.8s 0.6s ${spin} cubic-bezier(0, 0.63, 0.86, 0.39) infinite;
  }
`;

const Loader = () => {
  return (
    <Wrapper aria-hidden="false" aria-label="Loading">
      <div className="path">
        <div className="rotate-1">
          <span className="ball-1"></span>
        </div>
        <div className="rotate-2">
          <span className="ball-2"></span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Loader;
