import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchMovieRecom,
  changeRecomPage,
} from '../../store/actions/movieRecomActions';
import {
  Body,
  Title,
} from '../../components/styledComponents/styledComponents';
import Loader from '../../components/Loader/Loader';
import Cover from '../../components/Cover/Cover';
import Pagination from '../../components/Pagination/Pagination';

const Wrapper = styled.section`
  padding: 0 2rem;
`;

const RecomBody = styled(Body)`
  padding: 2rem;
`;

const RecomTitle = styled(Title)`
  margin-bottom: 3rem;
`;

class MovieRecom extends Component {
  componentDidMount() {
    const { fetchMovieRecom, id, page } = this.props;
    fetchMovieRecom(id, page);
  }

  componentDidUpdate(prevProps) {
    const { id, page, fetchMovieRecom } = this.props;

    if (prevProps.page !== page) {
      fetchMovieRecom(id, page);
    }
  }
  render() {
    const {
      loading,
      movies,
      image,
      page,
      total_pages,
      changeRecomPage,
    } = this.props;
    let imageUrl = `${image.url}/${image.sizes.poster_sizes[0]}`;

    if (loading) {
      return <Loader />;
    }
    return (
      <Wrapper>
        <RecomTitle>Recomandations</RecomTitle>
        <RecomBody>
          {movies.map((movie) => (
            <Cover
              key={movie.id}
              item={movie}
              url={imageUrl}
              path={`/movie/${movie.id}`}
            />
          ))}
        </RecomBody>
        <Pagination
          currentPage={page}
          maxBtns={5}
          totalPage={total_pages}
          changePage={changeRecomPage}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ movieRecom, singleMovie, app }) => ({
  loading: movieRecom.loading,
  movies: movieRecom.movies,
  page: movieRecom.page,
  total_pages: movieRecom.total_pages,
  id: singleMovie.data.id,
  image: app.image,
});

export default connect(mapStateToProps, { fetchMovieRecom, changeRecomPage })(
  MovieRecom
);
