import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blank_canvas from '../../img/blank_canvas.svg';
import Loader from '../Loader/Loader';

const ImgWrapper = styled.div`
  width: 100%;
  max-width: 20rem;
  min-width: 18rem;
  margin: 0 auto;
  height: 25rem;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  position: relative;

  @media only screen and (min-width: 62.5em) {
    max-width: 21rem;
    height: 28rem;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const Figure = styled.figure`
  width: 100%;
`;

const Figcaption = styled.figcaption`
  padding: 1rem;
  text-align: center;

  .movie-rating {
    font-size: 1.2rem;

    svg {
      color: var(--clr-info);
      margin-right: 1rem;
    }
  }
`;

const Navlink = styled(Link)`
  font-size: 1.25rem;
  color: var(--clr-primary);
  text-decoration: none;
  margin-bottom: 0.7rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Cover = ({
  url,
  path,
  item: { poster_path, title, name, vote_average },
}) => {
  let imgUrl = blank_canvas;
  if (poster_path) {
    imgUrl = `${url}${poster_path}`;
  }

  return (
    <Figure>
      <ImgWrapper>
        <LazyLoad height={250} placeholder={<Loader />} offset={100}>
          <Img src={imgUrl} alt={title} />
        </LazyLoad>
      </ImgWrapper>
      <Figcaption>
        <Navlink to={path}>{formatTitle(title || name, 20)}</Navlink>
        <div className="movie-rating">
          <FontAwesomeIcon icon={faStar} />
          <span>{vote_average}</span>
        </div>
      </Figcaption>
    </Figure>
  );
};

// Form the time deppending on the duration
const formatTitle = (title, limit) => {
  if (title.length <= limit) return title;
  const words = title.split(' ');
  let formated = '';
  for (let i = 0; i < words.length; i++) {
    if (formated.length + words[i].length > limit) {
      break;
    }
    formated += `${words[i]} `;
  }
  return `${formated}...`;
};

export default Cover;
