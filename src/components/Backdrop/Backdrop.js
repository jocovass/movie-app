import React from 'react';
import styled from 'styled-components';

const Layer = styled.div`
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--clr-secondary);
  opacity: 0.7;
`;

const Backdrop = ({ toggleHandler }) => {
  return <Layer onClick={toggleHandler} />;
};

export default Backdrop;
