import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 3rem 0.5rem;
  text-align: center;
`;

const Navlink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0 1px;
  font-size: 1.3rem;
  border: 1px solid transparent;
  :hover {
    border-color: var(--clr-primary-light);
  }
  color: ${(props) =>
    props.active ? 'var(--clr-primary)' : 'var(--clr-primary-light)'};
  border-color: ${(props) =>
    props.active ? 'var(--clr-info)' : 'transparent'};
`;

const Pagination = ({ currentPage, numsBtn, totalPage }) => {
  let startPage = 1;
  const buttons = [];
  if (currentPage - Math.floor(numsBtn / 2) < 1) {
    startPage = 1;
  } else if (currentPage + Math.floor(numsBtn / 2) > totalPage) {
    startPage = totalPage - numsBtn + 1;
  } else {
    startPage = currentPage - Math.floor(numsBtn / 2);
  }

  for (let i = startPage; i < startPage + numsBtn; i++) {
    buttons.push(<Button label={i} currentPage={currentPage} key={i} />);
  }

  if (currentPage > 3) {
    buttons.unshift(<Button label="First" key="first" />);
  }

  if (currentPage < 498) {
    buttons.push(<Button label="Last" key="last" />);
  }

  return <Wrapper>{buttons}</Wrapper>;
};

const Button = ({ label, currentPage }) => (
  <Navlink to="/" active={currentPage === label ? 'true' : null}>
    {label}
  </Navlink>
);

export default Pagination;
