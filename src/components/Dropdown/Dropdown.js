import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 11rem;
  min-width: 80px;
  position: relative;
  font-size: 1rem;
  z-index: 20;

  &:focus {
    outline: none;
  }

  .selected-text {
    pointer-events: none;
    background-color: var(--clr-secondary);
    padding: 0.8rem 1rem;
    border: 1px solid var(--clr-primary-light);
    border-radius: 20px;
    position: relative;
    transition: all 0.1s ease-in-out;
  }

  .arrow {
    /* background-color: red; */
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    right: 1.2rem;
    top: 1rem;

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
    background-color: var(--clr-secondary);
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

const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
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
    options.forEach((el) => {
      if (el.sortBy === e.target.dataset.name) setSelectedOption(el);
    });
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
        {selectedOption.name}
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
        {options.map((option) => {
          return (
            <li
              className="option-item"
              data-name={option.sortBy}
              role="option"
              key={option.name}
              aria-selected={selectedOption === option.name ? true : false}
            >
              {option.name}
            </li>
          );
        })}
      </ul>
    </DropdownContainer>
  );
};

export default Dropdown;
