import React from 'react';
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
import { Component } from 'react';

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
  }

  .genres .nav-group__btn {
    padding-left: 2rem;
    border: none;
  }
`;

const Navitem = css`
  width: 100%;
  padding: 0.7rem 1rem;
  font-size: 1.4rem;
  border-left: 5px solid transparent;
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
    openMovies: false,
    openTVShows: false,
  };

  handleTypeChange = (e) => {
    if (e.type === 'keypress' && e.keyCode !== 13) return;
    const element = e.target.closest('[data-type]');
    this.setState({ selectedType: element.dataset.type, selectedGenre: '' });
  };

  handleGenreChange = (e) => {
    if (e.type === 'keypress' && e.keyCode !== 13) return;
    const element = e.target.closest('[data-name]');
    this.setState({
      selectedType: '',
      selectedGenre: element.dataset.name,
      discover: '',
    });
  };

  render() {
    const { genres } = this.props;
    const { openMovies, openTVShows, selectedType } = this.state;
    return (
      <Nav>
        {/* Top navigation */}
        <div className="nav-group types">
          <h3 className="nav-group__title">Discover</h3>
          <ul className="nav-group__list">
            <li className="nav-group__item">
              <Navlink
                to="/discover/movie"
                data-type="movies"
                selected={selectedType === 'movies' ? true : false}
                onClick={this.handleTypeChange}
                onKeyPress={this.handleTypeChange}
              >
                <FontAwesomeIcon icon={faFilm} className="icon-type" />
                Movies
              </Navlink>
            </li>
            <li className="nav-group__item">
              <Navlink
                to="/discover/tvshows"
                data-type="tvshows"
                selected={selectedType === 'tvshows' ? true : false}
                onClick={this.handleTypeChange}
                onKeyPress={this.handleTypeChange}
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
                    openMovies: !prevState.openMovies,
                  }))
                }
                selected={openMovies}
              >
                Movies
                <FontAwesomeIcon
                  icon={openMovies ? faAngleUp : faAngleDown}
                  className="icon-arrow"
                />
              </Navbtn>
              <Subnav isOpen={openMovies} navItems={genres.movie} />
            </li>
            <li className="nav-group__item">
              <Navbtn
                className="dropdown"
                onClick={() =>
                  this.setState((prevState) => ({
                    openTVShows: !prevState.openTVShows,
                  }))
                }
                selected={openTVShows}
              >
                TV Shows
                <FontAwesomeIcon
                  icon={openTVShows ? faAngleUp : faAngleDown}
                  className="icon-arrow"
                />
              </Navbtn>
              <Subnav isOpen={openTVShows} navItems={genres.tvshow} />
            </li>
          </ul>
        </div>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => ({
  genres: state.api.genres,
});

export default connect(mapStateToProps)(Navigation);
