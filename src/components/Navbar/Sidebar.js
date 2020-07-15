import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Navigation from '../../containers/Navigation/Navigation';

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 17rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: var(--clr-secondary);
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-130%)'};
  transition: transform 0.25s ease-in-out;

  @media only screen and (min-width: 62.5em) {
    transform: translateX(0);
    width: 20rem;
  }
`;

const Sidebar = ({ isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Logo />
      <Navigation />
    </Wrapper>
  );
};

export default Sidebar;
