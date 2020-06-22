import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.div`
  overflow: hidden;
  height: ${(props) => (props.isOpen ? '31rem' : '0rem')};
  transition: height 0.3s ease-in-out;
  box-shadow: inset 0px -0.5px 5px rgba(0, 0, 0, 0.05),
    inset 0 0.5px 5px rgba(0, 0, 0, 0.1);

  .sub-nav {
    &__list {
      list-style-type: none;
      padding: 1rem 0;
    }

    &__item {
      &:not(:last-child) {
        margin-bottom: 0.3rem;
      }
    }

    &__btn {
      width: 100%;
      padding: 0.6rem 3rem;
      font-size: 1.2rem;
      color: var(--clr-primary-light);
      text-align: left;
      border-left: 5px solid transparent;
      transition: background 0.15s ease-in-out;

      &.active {
        border-left-color: var(--clr-info);
        color: var(--clr-primary);
      }

      &:hover {
        background-color: var(--clr-primary-light);
      }
    }
  }

  .icon-dot {
    margin-right: 0.6rem;
    font-size: 0.8rem;
  }
`;

const Subnav = ({ isOpen, navItems }) => {
  return (
    <Nav className="sub-nav" isOpen={isOpen}>
      <ul className="sub-nav__list">
        <li className="sub-nav__item">
          <button className="sub-nav__btn active">
            <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
            Movies
          </button>
        </li>
      </ul>
    </Nav>
  );
};

export default Subnav;
