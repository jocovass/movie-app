import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions/movieActions';
import Loader from '../../components/Loader/Loader';
import Dropdown from '../../components/Dropdown/Dropdown';
import Cover from '../../components/Cover/Cover';
import Pagination from '../../components/Pagination/Pagination';
import {
  Wrapper,
  Header,
  Body,
  Title,
} from '../../components/styledComponents/styledComponents';

const options = [
  { name: 'Most Popular', sortBy: 'popular' },
  { name: 'Top Rated', sortBy: 'top_rated' },
];

class Movies extends Component {
  state = {
    selectedOption: options[0],
  };

  async componentDidMount() {
    const { page } = this.props.match.params;

    this.props.fetchMovies(this.state.selectedOption.sortBy, page);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.props.match.params;
    const { sortBy } = this.state.selectedOption;
    if (prevState.selectedOption.sortBy !== sortBy) {
      this.props.fetchMovies(sortBy, page);
    } else if (prevProps.match.params.page !== page) {
      this.props.fetchMovies(sortBy, page);
    }
  }

  setSelectedOptions = (el) => {
    this.setState({ selectedOption: el });
  };

  render() {
    const { movies, loading, image } = this.props;
    let imageUrl = '';
    if (image.url) {
      imageUrl = `${image.url}/${image.sizes.poster_sizes[0]}`;
    }
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
            <Cover
              key={movie.id}
              item={movie}
              url={imageUrl}
              path={`/movie/${movie.id}`}
            />
          ))}
        </Body>
        <Pagination
          currentPage={movies.page}
          maxBtns={5}
          totalPage={movies.total_pages}
          path="/movies"
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ api, app }) => ({
  sidebarOpen: app.sidebarOpen,
  image: app.image,
  movies: api.movies,
  loading: api.loading,
  selected: api.selected,
});

export default connect(mapStateToProps, { fetchMovies })(Movies);
