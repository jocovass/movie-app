import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 5rem;
  width: 5rem;
  border: 1px solid transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s all ease-in-out;

  &:hover,
  &:focus,
  &:active {
    border-color: var(--clr-primary);
    outline: none;
  }
`;

const Hamburger = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;

  .bar {
    display: block;
    height: 3px;
    border-radius: 3px;
    width: 100%;
    background-color: var(--clr-primary);
  }

  .first-bar {
    width: ${(props) => (props.isOpen ? '40%' : '100%')};
    transform: ${(props) =>
      props.isOpen
        ? 'rotate(-30deg) translate(-1px, 3px)'
        : 'rotate(0deg) translate(0px, 0px)'};
    transition: 0.2s transform ease;
  }

  .second-bar {
    margin: 4px 0;
    width: ${(props) => (props.isOpen ? '100%' : '60%')};
    transition: 0.4s width cubic-bezier(0.23, 0.69, 0.46, 1.67);
  }

  .third-bar {
    width: ${(props) => (props.isOpen ? '40%' : '100%')};
    transform: ${(props) =>
      props.isOpen
        ? 'rotate(30deg) translate(-1px, -3px)'
        : 'rotate(0deg) translate(0px, 0px)'};
    transition: 0.2s transform ease;
  }
`;

const NavbarToggleBtn = ({ clickHandler, isOpen, keyPressHandler }) => {
  return (
    <Wrapper
      onClick={clickHandler}
      onKeyDown={keyPressHandler}
      tabIndex="0"
      role="button"
      aria-pressed={isOpen}
    >
      <Hamburger isOpen={isOpen}>
        <span className="bar first-bar"></span>
        <span className="bar second-bar"></span>
        <span className="bar third-bar"></span>
      </Hamburger>
    </Wrapper>
  );
};

export default NavbarToggleBtn;
