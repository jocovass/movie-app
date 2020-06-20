import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100vh;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: var(--clr-secondary);
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-130%)'};
  transition: transform 0.4s ease-in-out;
`;

const Sidebar = ({ isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Logo />
    </Wrapper>
  );
};

export default Sidebar;
