import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = styled.div`
  position: relative;
  align-self: center;
  overflow: hidden;
  cursor: pointer;
  width: ${(props) => (props.isOpen ? '21rem' : '3.5rem')};
  height: 3.5rem;
  outline: none;
  border-radius: 100px;
  border: 1px solid var(--clr-primary-light);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  transition: border 0.1s ease-in-out,
    width 0.35s cubic-bezier(0.6, -0.62, 0.84, 1.51);

  &:hover {
    border-color: var(--clr-info);
  }

  &:focus-within {
    border-color: var(--clr-info);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  }

  form {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  button {
    width: 3.5rem;
    height: 3.5rem;
    color: var(--clr-primary-light);
    pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
    display: block;
    margin-left: auto;
  }

  input {
    font-size: 1.2rem;
    color: var(--clr-primary);
    background-color: transparent;
    outline: none;
    border: none;
    width: ${(props) => (props.isOpen ? '100%' : '0%')};
    transition: width 0.35s ease-in-out;

    &::placeholder {
      color: var(--clr-primary-light);
    }
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', closeSearchBox);
    return () => document.removeEventListener('mousedown', closeSearchBox);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchText.trim() !== '') {
      console.log(searchText);
    }
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const openSearchBox = (e) => {
    if (e.keyCode == 13 || e.type === 'click') {
      setIsOpen(true);
      inputRef.current.focus();
    } else if (e.keyCode === 27) {
      setIsOpen(false);
    }
  };

  const closeSearchBox = (e) => {
    if (!formRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <SearchContainer
      isOpen={isOpen}
      onClick={openSearchBox}
      onKeyDown={openSearchBox}
      className="search-wrapper"
      role="button"
      aria-label="Toggler button"
      tabIndex="0"
    >
      <form onSubmit={submitHandler} ref={formRef}>
        <input
          type="text"
          placeholder="search..."
          name="search"
          value={searchText}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button aria-label="Search button">
          <SearchIcon icon={faSearch} />
        </button>
      </form>
    </SearchContainer>
  );
};

export default Search;
