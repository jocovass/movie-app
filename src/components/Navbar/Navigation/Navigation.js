import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTv,
  faFilm,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import Subnav from './Subnav';

const Nav = styled.nav`
  .nav-group {
    padding: 2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &__title {
      font-size: 1.5rem;
      letter-spacing: 1px;
      font-weight: 300;
      text-transform: uppercase;
      margin-bottom: 1rem;
      padding-left: 4rem;
    }

    &__list {
      list-style-type: none;
    }

    &__item {
      &:not(:last-child) {
        margin-bottom: 0.3rem;
      }
    }

    &__btn {
      width: 100%;
      padding: 0.7rem 1rem;
      font-size: 1.4rem;
      color: var(--clr-primary-light);
      text-align: left;
      border-left: 5px solid transparent;
      transition: background 0.2s ease-in-out;

      &.active {
        border-left-color: var(--clr-info);
        color: var(--clr-primary);
      }

      &:hover {
        background-color: var(--clr-primary-light);
      }
    }
  }

  .genres .nav-group__btn {
    padding-left: 2rem;
    border: none;
  }

  .icon-type {
    margin-right: 1rem;
  }

  .icon-arrow {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

const Navigation = () => {
  const [openMovies, setOpenMovies] = useState(false);
  const [openTVShows, setOpenTVShows] = useState(false);

  return (
    <Nav>
      {/* Top navigation */}
      <div className="nav-group types">
        <h3 className="nav-group__title">Discover</h3>
        <ul className="nav-group__list">
          <li className="nav-group__item">
            <button className="nav-group__btn active">
              <FontAwesomeIcon icon={faFilm} className="icon-type" />
              Movies
            </button>
          </li>
          <li className="nav-group__item">
            <button className="nav-group__btn">
              <FontAwesomeIcon icon={faTv} className="icon-type" />
              TV Shows
            </button>
          </li>
        </ul>
      </div>

      {/* Bottom navigation */}
      <div className="nav-group genres">
        <h3 className="nav-group__title">Genres</h3>
        <ul className="nav-group__list">
          <li className="nav-group__item ">
            <button
              className="nav-group__btn active"
              onClick={() => setOpenMovies(!openMovies)}
            >
              Movies
              <FontAwesomeIcon
                icon={openMovies ? faAngleUp : faAngleDown}
                className="icon-arrow"
              />
            </button>
            <Subnav isOpen={openMovies} />
          </li>
          <li className="nav-group__item">
            <button
              className="nav-group__btn"
              onClick={() => setOpenTVShows(!openTVShows)}
            >
              TV Shows
              <FontAwesomeIcon
                icon={openMovies ? faAngleUp : faAngleDown}
                className="icon-arrow"
              />
            </button>
            <Subnav isOpen={openTVShows} />
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navigation;
