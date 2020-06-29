import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  padding: 3rem 0.5rem;
  text-align: center;
`;

const pageNumStyle = css`
  display: inline-block;
  padding: 0.5rem;
  margin: 0 1px;
  font-size: 1.3rem;
  border: 1px solid transparent;
`;

const Navlink = styled(Link)`
  text-decoration: none;
  color: var(--clr-primary-light);
  ${pageNumStyle}
  :hover {
    border-color: var(--clr-primary-light);
  }
`;

const ActivePageNum = styled.span`
  color: var(--clr-primary);
  ${pageNumStyle}
  border-color: var(--clr-info);
`;

const Pagination = ({ currentPage, maxBtns, totalPage, path }) => {
  let startPage = 1;
  let endPage = 0;
  const buttons = [];
  if (currentPage - Math.floor(maxBtns / 2) < 1) {
    startPage = 1;
  } else if (currentPage + Math.floor(maxBtns / 2) > totalPage) {
    startPage = totalPage - maxBtns + 1;
  } else {
    startPage = currentPage - Math.floor(maxBtns / 2);
  }

  if (totalPage < maxBtns) {
    startPage = 1;
    endPage = startPage + totalPage;
  } else {
    endPage = startPage + maxBtns;
  }

  for (let i = startPage; i < endPage; i++) {
    buttons.push(
      <Button
        label={i}
        currentPage={currentPage}
        key={i}
        path={`${path}/${i}`}
      />
    );
  }

  const numOfPageButtons = buttons.length;
  if (currentPage > 3 && totalPage > numOfPageButtons) {
    buttons.unshift(<Button label="First" key="first" path={`${path}/1`} />);
  }

  if (
    currentPage < totalPage - Math.floor(maxBtns / 2) &&
    totalPage > numOfPageButtons
  ) {
    buttons.push(
      <Button label="Last" key="last" path={`${path}/${totalPage}`} />
    );
  }

  return <Wrapper>{buttons}</Wrapper>;
};

const Button = ({ label, currentPage, path }) => {
  if (currentPage === label) {
    return <ActivePageNum>{label}</ActivePageNum>;
  }

  return <Navlink to={path}>{label}</Navlink>;
};

export default Pagination;
