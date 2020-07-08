import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  discoverMovies,
  changeDiscoverMoviesPage,
} from '../../store/actions/discoverMoviesAction';
import {
  Wrapper,
  Header,
  Body,
  Title,
} from '../../components/styledComponents/styledComponents';
import Dropdown from '../../components/Dropdown/Dropdown';
import Loader from '../../components/Loader/Loader';
import Cover from '../../components/Cover/Cover';
import Pagination from '../../components/Pagination/Pagination';
import axios from '../../axios';

const options = [
  { name: 'Most Popular', sortBy: 'popularity.desc' },
  { name: 'Vote average', sortBy: 'vote_average.desc' },
  { name: 'Released', sortBy: 'release_date.desc' },
];

class DiscoverMovies extends Component {
  state = {
    selectedOption: options[0],
  };

  componentDidMount() {
    this.props.discoverMovies(this.props.match.params.genreId, 1);
    // axios
    //   .get('/discover/movie', {
    //     params: {
    //       with_cast: 27972,
    //     },
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, newPage, match } = this.props;
    const { sortBy } = this.state.selectedOption;
    if (prevState.selectedOption.sortBy !== sortBy) {
      this.props.discoverMovies(match.params.genreId, 1, sortBy);
    } else if (prevProps.page !== page && newPage) {
      this.props.discoverMovies(match.params.genreId, page, sortBy);
    }
  }

  setSelectedOption = (el) => {
    this.setState({ selectedOption: el });
  };

  render() {
    const {
      sidebarOpen,
      movies,
      loading,
      image,
      selected,
      page,
      total_pages,
      changeDiscoverMoviesPage,
    } = this.props;
    const imageUrl = `${image.url}/${image.sizes.poster_sizes[0]}`;
    const [, genre] = selected.split('-');
    if (loading) {
      return <Loader />;
    }

    return (
      <Wrapper sidebarOpen={sidebarOpen}>
        <Header>
          <Title>{genre}</Title>
          <Dropdown
            options={options}
            selectedOption={this.state.selectedOption}
            setSelectedOption={this.setSelectedOption}
          />
        </Header>
        <Body>
          {movies.map((movie) => (
            <Cover
              key={movie.id}
              item={movie}
              url={imageUrl}
              path={`/movie/${movie.id}`}
            />
          ))}
        </Body>
        <Pagination
          currentPage={page}
          maxBtns={5}
          totalPage={total_pages}
          changePage={changeDiscoverMoviesPage}
        />
      </Wrapper>
    );
  }
}

const mapStateToProp = ({ app, discoverMovies }) => ({
  loading: discoverMovies.loading,
  movies: discoverMovies.movies,
  newPage: discoverMovies.newPage,
  page: discoverMovies.page,
  total_pages: discoverMovies.total_pages,
  sidebarOpen: app.sidebarOpen,
  selected: app.selected,
  image: app.image,
});

export default connect(mapStateToProp, {
  discoverMovies,
  changeDiscoverMoviesPage,
})(DiscoverMovies);
