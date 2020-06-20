import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  h1 {
    font-size: 1.5rem;
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      <h1>MovieApp</h1>
    </Wrapper>
  );
};

export default Logo;
