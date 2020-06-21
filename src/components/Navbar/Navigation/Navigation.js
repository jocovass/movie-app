import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTv,
  faFilm,
  faAngleDown,
  faAngleUp,
  faDotCircle,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';

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
      display: block;
      font-size: 1.4rem;
      color: var(--clr-primary-light);
      padding: 0.7rem 1rem;

      &.active {
        border-left: 5px solid var(--clr-info);
        color: var(--clr-primary);
      }
    }
  }

  .genres .nav-group__btn {
    padding-left: 2rem;

    &.active {
      border: none;
    }
  }

  .icon-type {
    margin-right: 1rem;
  }

  .icon-arrow {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

const Subnav = styled.div`
  overflow: hidden;
  height: ${(props) => (props.isOpen ? '100%' : '0px')};
  transition: height 1s ease;

  .sub-nav {
    &__list {
      list-style-type: none;
    }

    &__item {
      font-size: 1.2rem;
      color: var(--clr-primary-light);

      padding: 0.6rem 1rem;

      &:not(:last-child) {
        margin-bottom: 0.3rem;
      }
    }
  }

  .active {
    border-left: 5px solid var(--clr-info);
    color: var(--clr-primary);
  }

  .icon-dot {
    margin-right: 1rem;
  }
`;

const Navigation = () => {
  const [openMovies, setOpenMovies] = useState(false);
  console.log(openMovies);
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
              <FontAwesomeIcon icon={faAngleDown} className="icon-arrow" />
            </button>
            <Subnav className="sub-nav" isOpen={openMovies}>
              <ul className="sub-nav__list">
                <li className="sub-nav__item active">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
                <li className="sub-nav__item">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
                <li className="sub-nav__item">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
                <li className="sub-nav__item">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
                <li className="sub-nav__item">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
                <li className="sub-nav__item">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
                <li className="sub-nav__item">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
                <li className="sub-nav__item">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
                <li className="sub-nav__item">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
                <li className="sub-nav__item">
                  <FontAwesomeIcon icon={faDotCircle} className="icon-dot" />
                  Movies
                </li>
              </ul>
            </Subnav>
          </li>
          <li className="nav-group__item">
            <button className="nav-group__btn">
              TV Shows
              <FontAwesomeIcon icon={faAngleDown} className="icon-arrow" />
            </button>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navigation;
