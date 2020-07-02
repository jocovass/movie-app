import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTv,
  faFilm,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import Subnav from '../../components/Subnav/Subnav';
import { toggleSidebar } from '../../store/actions/index';

const Nav = styled.nav`
  .nav-group {
    padding: 2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &__title {
      font-size: 1.3rem;
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
        margin-bottom: 0.2rem;
      }
    }
  }

  .genres .nav-group__btn {
    padding-left: 2rem;
    border: none;
  }
`;

const Navitem = css`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-left: 0.4rem solid transparent;
  color: ${(props) =>
    props.selected ? 'var(--clr-primary)' : 'var(--clr-primary-light)'};
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: var(--clr-primary-light);
  }

  .icon-type {
    margin-right: 1rem;
  }

  .icon-arrow {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

const Navlink = styled(Link)`
  ${Navitem}
  text-decoration: none;
  display: inline-block;
  border-left-color: ${(props) =>
    props.selected ? 'var(--clr-info)' : 'transparent'};
`;

const Navbtn = styled.button`
  ${Navitem}
  text-align: left;
`;

class Navigation extends Component {
  state = {
    openMovie: false,
    openTv: false,
  };

  handleNavItemClick = () => {
    this.props.toggleSidebar(!this.props.sidebarOpen);
  };

  render() {
    const { movieGenres, tvGenres, selected } = this.props;
    const { openMovie, openTv } = this.state;

    return (
      <Nav>
        {/* Top navigation */}
        <div className="nav-group types">
          <h3 className="nav-group__title">Discover</h3>
          <ul className="nav-group__list">
            <li className="nav-group__item">
              <Navlink
                to="/movies/1"
                selected={selected === 'movies' ? true : false}
                onClick={this.handleNavItemClick}
              >
                <FontAwesomeIcon icon={faFilm} className="icon-type" />
                Movies
              </Navlink>
            </li>
            <li className="nav-group__item">
              <Navlink
                to="/tvs/1"
                selected={selected === 'tvs' ? true : false}
                onClick={this.handleNavItemClick}
              >
                <FontAwesomeIcon icon={faTv} className="icon-type" />
                TV Shows
              </Navlink>
            </li>
          </ul>
        </div>

        {/* Bottom navigation */}
        <div className="nav-group genres">
          <h3 className="nav-group__title">Genres</h3>
          <ul className="nav-group__list">
            <li className="nav-group__item ">
              <Navbtn
                className="dropdown"
                onClick={() =>
                  this.setState((prevState) => ({
                    openMovie: !prevState.openMovie,
                  }))
                }
                selected={openMovie}
              >
                Movies
                <FontAwesomeIcon
                  icon={openMovie ? faAngleUp : faAngleDown}
                  className="icon-arrow"
                />
              </Navbtn>
              <Subnav
                isOpen={openMovie}
                navItems={movieGenres}
                selected={selected}
                type="movie"
              />
            </li>
            <li className="nav-group__item">
              <Navbtn
                className="dropdown"
                onClick={() =>
                  this.setState((prevState) => ({
                    openTv: !prevState.openTv,
                  }))
                }
                selected={openTv}
              >
                TV Shows
                <FontAwesomeIcon
                  icon={openTv ? faAngleUp : faAngleDown}
                  className="icon-arrow"
                />
              </Navbtn>
              <Subnav
                isOpen={openTv}
                navItems={tvGenres}
                selected={selected}
                type="tv"
              />
            </li>
          </ul>
        </div>
      </Nav>
    );
  }
}

const mapStateToProps = ({ api, app }) => ({
  movieGenres: app.movieGenres,
  tvGenres: app.tvGenres,
  sidebarOpen: app.sidebarOpen,
  selected: api.selected,
});

export default connect(mapStateToProps, { toggleSidebar })(Navigation);
