import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, changePage } from '../../store/actions/moviesActions';
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
    this.props.fetchMovies(this.state.selectedOption.sortBy);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, newPage } = this.props;
    const { sortBy } = this.state.selectedOption;
    if (prevState.selectedOption.sortBy !== sortBy) {
      this.props.fetchMovies(sortBy, 1);
    } else if (prevProps.page !== page && newPage) {
      this.props.fetchMovies(sortBy, page);
    }
  }

  setSelectedOptions = (el) => {
    this.setState({ selectedOption: el });
  };

  render() {
    const {
      movies,
      loading,
      image,
      total_pages,
      page,
      changePage,
    } = this.props;
    let imageUrl = `${image.url}/${image.sizes.poster_sizes[0]}`;

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
          changePage={changePage}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ movies, app }) => ({
  sidebarOpen: app.sidebarOpen,
  image: app.image,
  selected: app.selected,
  page: movies.page,
  newPage: movies.newPage,
  total_pages: movies.total_pages,
  movies: movies.items,
  loading: movies.loading,
});

export default connect(mapStateToProps, { fetchMovies, changePage })(Movies);
