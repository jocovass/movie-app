import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div``;

const Search = () => {
  return (
    <form>
      <input type="text" placeholder="search..." name="search" />
      <button aria-label="search button"></button>
    </form>
  );
};

export default Search;
