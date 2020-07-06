import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 0.5rem;
  text-align: center;
`;

const pageNumStyle = css`
  display: inline-block;
  padding: 0.5rem;
  margin: 0 1px;
  font-size: 1.2rem;
  border: 1px solid transparent;
`;

const PageButton = styled.button`
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

const Pagination = ({ currentPage, maxBtns, totalPage, changePage }) => {
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
        pageNum={i}
        currentPage={currentPage}
        key={i}
        changePage={changePage}
      />
    );
  }

  const numOfPageButtons = buttons.length;
  if (currentPage > 3 && totalPage > numOfPageButtons) {
    buttons.unshift(
      <Button label="First" key="first" pageNum={1} changePage={changePage} />
    );
  }

  if (
    currentPage < totalPage - Math.floor(maxBtns / 2) &&
    totalPage > numOfPageButtons
  ) {
    buttons.push(
      <Button
        label="Last"
        key="last"
        pageNum={totalPage}
        changePage={changePage}
      />
    );
  }
  return <Wrapper>{buttons}</Wrapper>;
};

const Button = ({ label, pageNum, currentPage, changePage }) => {
  if (currentPage === label) {
    return <ActivePageNum>{label}</ActivePageNum>;
  }

  return <PageButton onClick={() => changePage(pageNum)}>{label}</PageButton>;
};

export default Pagination;
