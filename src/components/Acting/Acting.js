import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Body, Title } from '../styledComponents/styledComponents';
import Loader from '../Loader/Loader';
import Cover from '../Cover/Cover';
import Pagination from '../Pagination/Pagination';

const Wrapper = styled.section`
  padding: 0 2rem;
`;

const RecomBody = styled(Body)`
  padding: 2rem;
`;

const RecomTitle = styled(Title)`
  margin-bottom: 3rem;
`;

const NotfoundMsg = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
`;

class ReletedItems extends Component {
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

    const moviesArr = movies.map((movie) => (
      <Cover
        key={movie.id}
        item={movie}
        url={imageUrl}
        path={`/movie/${movie.id}`}
      />
    ));

    if (loading) {
      return <Loader />;
    }
    return (
      <Wrapper>
        <RecomTitle>Recomandations</RecomTitle>
        <RecomBody>
          {movies.length ? (
            moviesArr
          ) : (
            <NotfoundMsg>
              There is no recomandation based on this movie
            </NotfoundMsg>
          )}
        </RecomBody>
        <Pagination
          currentPage={page}
          maxBtns={5}
          totalPage={movies.length ? total_pages : 0}
          changePage={changeRecomPage}
        />
      </Wrapper>
    );
  }
}

export default ReletedItems;
