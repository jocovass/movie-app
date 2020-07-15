import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  h1 {
    font-size: 1.8rem;
    text-align: center;
    padding: 5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    @media only screen and (min-width: 62.5em) {
      padding: 8rem 0;
    }
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
