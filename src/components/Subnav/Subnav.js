import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.div`
  overflow: hidden;
  background-color: #282828;
  height: ${(props) => (props.isOpen ? `calc(28.1px * ${props.size})` : '0px')};
  transition: height 0.3s ease-in-out;
  box-shadow: inset 0px -0.5px 5px rgba(0, 0, 0, 0.05),
    inset 0 0.5px 5px rgba(0, 0, 0, 0.1);

  .sub-nav {
    &__list {
      list-style-type: none;
      padding: 1rem 0;
    }
  }
`;

const Subnav = ({ isOpen, navItems, selected }) => {
  return (
    <Nav className="sub-nav" isOpen={isOpen} size={navItems.length}>
      <ul className="sub-nav__list">
        {navItems.map((navItem, index) => {
          return <NavItem item={navItem} key={index} selected={selected} />;
        })}
      </ul>
    </Nav>
  );
};

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }

  .sub-nav__link {
    width: 100%;
    display: inline-block;
    text-decoration: none;
    padding: 0.6rem 3rem;
    font-size: 1.2rem;
    border-left: 5px solid transparent;
    color: ${(props) =>
      props.selected ? 'var(--clr-primary)' : 'var(--clr-primary-light)'};
    border-left-color: ${(props) =>
      props.selected ? 'var(--clr-info)' : 'transparent'};
    transition: background 0.15s ease-in-out;

    &:hover {
      background-color: var(--clr-primary-light);
    }
  }

  .icon-dot {
    margin-right: 0.6rem;
    font-size: 0.8rem;
  }
`;

const NavItem = ({ item, selected, type }) => (
  <Item
    className="sub-nav__item"
    selected={selected === `${type}-${item.name}` ? true : false}
  >
    <Link to="/" className="sub-nav__link" data-name={item.name}>
      <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
      {item.name}
    </Link>
  </Item>
);

export default Subnav;
