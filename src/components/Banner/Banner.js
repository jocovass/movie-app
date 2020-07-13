import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ModalVideo from 'react-modal-video';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const Wrapper = styled.div`
  position: absolute;
  bottom: -2.5rem;
  right: 0;
  width: 90%;
  padding: 1.2rem;
  background-color: var(--clr-secondary);
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
  border-radius: 100px 0 0 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RatingContainer = styled.div`
  margin-left: 2rem;
  text-align: center;
  svg {
    color: var(--clr-info);
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }
  .rating {
    font-size: 1rem;
    font-weight: 900;
  }
  .rating-range,
  .total-ratings {
    font-size: 0.9rem;
    font-weight: 300;
    color: var(--clr-primary-light);
  }
`;

const buttonStyle = css`
  font-size: 1rem;
  color: var(--clr-primary-light);
  text-align: center;
  transition: color 0.2s ease-in-out;
  svg {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  span {
    display: block;
  }

  &:hover {
    color: var(--clr-primary);
  }
`;

const Link = styled.a`
  ${buttonStyle}
  text-decoration: none;
`;

const Button = styled.button`
  ${buttonStyle}
`;

const Banner = ({ imdbId, trailerId, voteAverage, voteCount }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId={trailerId}
        onClose={() => setOpen(false)}
      />
      <RatingContainer>
        <FontAwesomeIcon icon={faStar} />
        <p className="rating">
          {voteAverage}
          <span className="rating-range">/10</span>
        </p>
        <p className="total-ratings">{voteCount}</p>
      </RatingContainer>
      <Button onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faPlay} />
        <span>Trailer</span>
      </Button>
      <Link href={`https://www.imdb.com/title/${imdbId}`} target="_blank">
        <FontAwesomeIcon icon={faImdb} />
        <span>IMDB</span>
      </Link>
    </Wrapper>
  );
};

export default Banner;
