import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import { TertiaryTitle } from '../styledComponents/styledComponents';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const SlideElement = styled(Link)`
  display: block;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  margin: 1rem 0 2rem;

  .image-container {
    display: block;
    margin: 0 auto 0.5rem;
    width: 5rem;
    height: 5rem;
  }

  .cast-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: inline-block;
  }

  .cast-name {
    color: var(--clr-primary-light);
    font-size: 0.8rem;
    display: block;
    text-align: center;
  }

  &:hover .cast-name {
    color: var(--clr-primary);
  }
`;

const Cast = ({ cast, image }) => {
  const containerRef = useRef();
  const [slidesToShow, setSlidesToShow] = useState(0);

  useEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const checkWidth = () => {
    const { clientWidth } = containerRef.current;
    setSlidesToShow(Math.floor(clientWidth / 70));
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <SlideContainer ref={containerRef}>
      <TertiaryTitle>The Cast</TertiaryTitle>
      <Slider {...settings}>
        {cast.map((el) => {
          return (
            <SlideElement key={el.id}>
              <span className="image-container">
                <img
                  className="cast-image"
                  src={`${image.url}${image.sizes.profile_sizes[0]}${el.profile_path}`}
                  alt={el.name}
                />
              </span>
              <span className="cast-name">{el.name}</span>
            </SlideElement>
          );
        })}
      </Slider>
    </SlideContainer>
  );
};

export default Cast;
