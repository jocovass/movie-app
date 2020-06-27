import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Figure = styled.figure`
  position: relative;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 250px;
  background: pink;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const Figcaption = styled.figcaption`
  padding: 1rem;
  text-align: center;

  .movie-rating {
    font-size: 1.3rem;

    svg {
      color: var(--clr-info);
      margin-right: 1rem;
    }
  }
`;

const Navlink = styled(Link)`
  font-size: 1.5rem;
  color: var(--clr-primary);
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Movie = ({ url, movie: { poster_path, title, id, vote_average } }) => {
  return (
    <Figure>
      <ImgWrapper>
        <Img src={`${url}/${poster_path}`} alt={title} />
      </ImgWrapper>
      <Figcaption>
        <Navlink to="/">{title}</Navlink>
        <div className="movie-rating">
          <FontAwesomeIcon icon={faStar} />
          <span>{vote_average}</span>
        </div>
      </Figcaption>
    </Figure>
  );
};

export default Movie;
