import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchMovies } from '../../store/actions/movieActions';
import axios from '../../axios';
import Loader from '../../components/Loader/Loader';
import Dropdown from '../../components/Dropdown/Dropdown';
import Movie from '../../components/Movie/Movie';

const Wrapper = styled.main`
  margin-top: 6.5rem;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '20em' : '0')};
  transition: 0.4s ease-in-out;
  min-width: 320px;
  padding: 3rem 1.5rem 1rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.section`
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 180px));
  grid-gap: 2rem;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 900;
  letter-spacing: 2px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    height: 3px;
    width: 3rem;
    border-radius: 20px;
    background-color: var(--clr-info);
  }
`;

const options = [
  { name: 'Most Popular', sortBy: 'popular' },
  { name: 'Top Rated', sortBy: 'top_rated' },
];

class Movies extends Component {
  state = {
    selectedOption: options[0],
  };

  async componentDidMount() {
    const {
      data: { images },
    } = await axios.get('/configuration');
    this.base_url = `${images.secure_base_url}/${images.poster_sizes[4]}`;
    this.props.fetchMovies(this.state.selectedOption.sortBy);
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortBy } = this.state.selectedOption;
    if (prevState.selectedOption.sortBy !== sortBy)
      this.props.fetchMovies(sortBy);
  }

  setSelectedOptions = (el) => {
    this.setState({ selectedOption: el });
  };

  render() {
    const { movies, loading } = this.props;

    if (loading) {
      return <Loader />;
    }
    return (
      <Wrapper sidebarOpen={this.props.sidebarOpen}>
        <Header>
          <Title>Movies</Title>
          <Dropdown
            options={options}
            selectedOption={this.state.selectedOption}
            setSelectedOption={this.setSelectedOptions}
          />
        </Header>
        <Body>
          {movies.results.map((movie) => (
            <Movie key={movie.id} movie={movie} url={this.base_url} />
          ))}
        </Body>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ api, app }) => ({
  sidebarOpen: app.sidebarOpen,
  movies: api.movies,
  loading: api.loading,
});

export default connect(mapStateToProps, { fetchMovies })(Movies);
