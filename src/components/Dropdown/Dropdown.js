import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 16rem;
  min-width: 130px;
  position: relative;
  font-size: 1.2rem;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
  }

  .selected-text {
    pointer-events: none;
    background-color: var(--clr-secondary);
    padding: 1rem 1.5rem;
    border: 1px solid var(--clr-primary-light);
    border-radius: 20px;
    position: relative;
    transition: all 0.1s ease-in-out;
  }

  .arrow {
    /* background-color: red; */
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    right: 1.2rem;
    top: 1.1rem;

    .left-arrow,
    .right-arrow {
      display: block;
      width: 100%;
      height: 1.5px;
      background-color: var(--clr-primary-light);
      position: absolute;
      top: 50%;
      left: 50%;
      transition: all 0.1s ease-in-out;
    }

    .left-arrow {
      transform: ${(props) =>
        props.isOpen
          ? 'translate(-80%, -50%) rotate(-55deg)'
          : 'translate(-80%, -50%) rotate(55deg)'};
    }

    .right-arrow {
      transform: ${(props) =>
        props.isOpen
          ? 'translate(-30%, -50%) rotate(55deg)'
          : 'translate(-30%, -50%) rotate(-55deg)'};
    }
  }

  .select-options {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    list-style-type: none;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 110%;
    border: 1px solid var(--clr-info);
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  }

  .option-item {
    padding: 1rem 1.2rem;
    position: relative;

    &:not(:last-child) {
      border-bottom: 1px solid var(--clr-primary-light);
    }

    &:first-child {
      border-radius: 10px 10px 0 0;
    }

    &:last-child {
      border-radius: 0 0 10px 10px;
    }

    &[aria-selected='true']::before {
      content: '';
      content: '';
      background-color: transparent;

      /* position the checkbox */
      position: absolute;
      left: 10%;
      top: 10px;

      /* setting the checkbox */
      /* short arm */
      width: 5px;
      border-bottom: 2px solid var(--clr-primary);
      /* long arm */
      height: 11px;
      border-right: 2px solid var(--clr-primary);
      /* rotate the mirrored L to make it a checkbox */
      transform: rotate(45deg);
    }

    &:hover,
    &:focus,
    &:active {
      background-color: var(--clr-primary-light);
    }
  }

  &:hover .selected-text,
  &:focus .selected-text,
  &:active .selected-text {
    border-color: var(--clr-info);
  }

  &:hover .left-arrow,
  &:focus .left-arrow,
  &:active .left-arrow,
  &:hover .right-arrow,
  &:focus .right-arrow,
  &:active .right-arrow {
    background-color: var(--clr-info);
  }
`;

const Dropdown = ({ defaultSelectedText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(defaultSelectedText);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  });

  const handleClickOutside = (e) => {
    if (
      !e.target.classList.contains('custom-select') &&
      !e.target.classList.contains('selected-text') &&
      !e.target.classList.contains('selecte-options') &&
      !e.target.classList.contains('option-item')
    ) {
      setIsOpen(false);
    }
  };

  const handleDropdownClick = (e) => {
    if (e.keyCode === 13 || e.type === 'click') {
      setIsOpen(!isOpen);
    } else if (e.keyCode === 27) {
      setIsOpen(false);
    }
  };

  const handleTextSelect = (e) => {
    setSelectedText(e.target.dataset.name);
    setIsOpen(false);
  };

  return (
    <DropdownContainer
      className="custom-select"
      onClick={handleDropdownClick}
      onKeyDown={handleDropdownClick}
      isOpen={isOpen}
      aria-label="Sort by"
      aria-haspopup="listbox"
      tabIndex="0"
      aria-expanded={isOpen}
    >
      <div className="selected-text">
        {selectedText}
        <div className="arrow">
          <span className="left-arrow"></span>
          <span className="right-arrow"></span>
        </div>
      </div>
      <ul
        className="select-options"
        onClick={handleTextSelect}
        onKeyDown={handleTextSelect}
        role="listbox"
        aria-label="List of options"
        tabIndex="-1"
      >
        <li
          className="option-item"
          data-name="Popularity"
          role="option"
          aria-selected
        >
          Popularity
        </li>
        <li
          className="option-item"
          data-name="AverageVote"
          role="option"
          aria-selected="false"
        >
          Average Vote
        </li>
        <li
          className="option-item"
          data-name="Title"
          role="option"
          aria-selected="false"
        >
          Title
        </li>
      </ul>
    </DropdownContainer>
  );
};

export default Dropdown;
