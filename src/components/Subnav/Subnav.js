import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.div`
  overflow: hidden;
  background-color: #282828;
  height: ${(props) => (props.isOpen ? `calc(2.8rem * ${props.size})` : '0px')};
  transition: height 0.3s ease-in-out;
  box-shadow: inset 0px -0.5px 5px rgba(0, 0, 0, 0.05),
    inset 0 0.5px 5px rgba(0, 0, 0, 0.1);

  .sub-nav__list {
    list-style-type: none;
    padding: 1rem 0;
  }
`;

const Subnav = ({ isOpen, navItems, selected, type, path }) => {
  return (
    <Nav className="sub-nav" isOpen={isOpen} size={navItems.length}>
      <ul className="sub-nav__list">
        {navItems.map((navItem, index) => {
          return (
            <NavItem
              item={navItem}
              key={index}
              selected={selected}
              path={path}
              type={type}
            />
          );
        })}
      </ul>
    </Nav>
  );
};

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.2rem;
  }

  .sub-nav__link {
    width: 100%;
    display: inline-block;
    text-decoration: none;
    padding: 0.5rem 0 0.5rem 2rem;
    font-size: 1.1rem;
    border-left: 0.4rem solid transparent;
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

  @media only screen and (min-width: 62.5em) {
    .sub-nav__link {
      padding: 0.5rem 0 0.5rem 3.5rem;
    }
  }
`;

const NavItem = ({ item, selected, type, path }) => {
  return (
    <Item
      className="sub-nav__item"
      selected={selected === `${type}-${item.name}` ? true : false}
    >
      <Link to={`${path}/${item.id}`} className="sub-nav__link">
        <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
        {item.name}
      </Link>
    </Item>
  );
};

export default Subnav;
