import React from 'react';
import styled from 'styled-components';
import movieDBLogo from '../../img/moviedb-logo.svg';

const Wrapper = styled.footer`
  margin-top: auto;
  padding: 2rem;
  text-align: center;
  color: var(--clr-primary-light);

  .attribution {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    width: 5rem;
    height: auto;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="attribution">
        <p>Pworder by:</p>
        <a
          href="https://www.themoviedb.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={movieDBLogo} alt="The MovieDB Logo" />
        </a>
      </div>
      <p>Made by - &copy;joco.codes</p>
    </Wrapper>
  );
};

export default Footer;
