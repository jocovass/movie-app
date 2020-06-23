import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.div`
  overflow: hidden;
  background-color: #282828;
  height: ${(props) => (props.isOpen ? `calc(25px * ${props.size})` : '0px')};
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

    &__link {
      width: 100%;
      display: inline-block;
      text-decoration: none;
      padding: 0.6rem 3rem;
      font-size: 1.2rem;
      color: var(--clr-primary-light);
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
  // const listitemRef = useRef();
  // useEffect(() => {
  //   const { length } = navItems;
  //   const elementHeight = listitemRef.current;
  //   console.log(elementHeight);
  // }, []);

  return (
    <Nav className="sub-nav" isOpen={isOpen} size={navItems.length}>
      <ul className="sub-nav__list">
        {navItems.map((navItem, index) => {
          return (
            <li className="sub-nav__item" key={index}>
              <Link to="/" className="sub-nav__link" data-name={navItem.name}>
                <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                {navItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
};

export default Subnav;
