import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchSingleMovie } from '../../store/actions/singleMovieActions';
import {
  Wrapper,
  Title,
  TertiaryTitle,
} from '../../components/styledComponents/styledComponents';
import Loader from '../../components/Loader/Loader';
import Banner from '../../components/Banner/Banner';
import Cast from '../../components/Cast/Cast';
import MovieRecom from '../MovieRecom/MovieRecom';

const ImgContainer = styled.div`
  height: 25rem;
  width: 100%;
  border-radius: 0 0 40px 40px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 40px 40px;
`;

const ItemTitle = styled(Title)`
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  &::before {
    display: none;
  }
`;

const ItemDetails = styled.div`
  padding: 5rem 2rem 0;
  margin-bottom: 4rem;
  .status {
    font-size: 1.1rem;
    color: var(--clr-primary-light);
    display: flex;
    margin-bottom: 2rem;
  }
  .release_date {
    margin-right: 2rem;
  }
  .genres {
    margin-bottom: 4rem;
  }
  .genre-item {
    margin-right: 1rem;
    display: inline-block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: var(--clr-primary);
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid var(--clr-primary-light);
    border-radius: 100px;
  }
  .summary {
    margin-bottom: 4rem;

    &-body {
      line-height: 1.8;
      font-size: 1rem;
      color: var(--clr-primary-light);
    }
  }
`;

class SingleMovie extends Component {
  componentDidMount() {
    this.props.fetchSingleMovie(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchSingleMovie(this.props.match.params.id);
    }
  }

  render() {
    const { image, singleMovie, loading, cast } = this.props;
    let imageUrl = `${image.url}${image.sizes.backdrop_sizes[1]}${singleMovie.backdrop_path}`;

    if (loading) {
      return <Loader />;
    }
    return (
      <Wrapper sidebarOpen={this.props.sidebarOpen} style={{ padding: 0 }}>
        <ImgContainer>
          <Img src={imageUrl} />
          <Banner
            imdbId={singleMovie.imdb_id}
            trailerId="id.."
            voteAverage={singleMovie.vote_average}
            voteCount={singleMovie.vote_count}
          />
        </ImgContainer>
        <ItemDetails>
          <ItemTitle>{singleMovie.title}</ItemTitle>
          <div className="status">
            <span className="release_date">{singleMovie.release_date}</span>
            <span className="duration">{formTime(singleMovie.runtime)}</span>
          </div>
          <div className="genres">
            {singleMovie.genres
              ? singleMovie.genres.map((genre) => {
                  return (
                    <Link
                      key={genre.id}
                      to={`/discover/movie/${genre.id}`}
                      className="genre-item"
                    >
                      {genre.name}
                    </Link>
                  );
                })
              : null}
          </div>
          <div className="summary">
            <TertiaryTitle className="summary-title">
              Plot Summary
            </TertiaryTitle>
            <p className="summary-body">{singleMovie.overview}</p>
          </div>
          <Cast cast={cast} image={image} />
        </ItemDetails>
        <MovieRecom />
      </Wrapper>
    );
  }
}

const formTime = (time) => {
  const h = Math.floor(time / 60);
  const min = time % 60;

  return `${h}h${min ? ` ${min}min` : ''}`;
};

const mapStateToProps = ({ app, singleMovie }) => ({
  sidebarOpen: app.sidebarOpen,
  image: app.image,
  singleMovie: singleMovie.data,
  cast: singleMovie.cast,
  loading: singleMovie.loading,
});

export default connect(mapStateToProps, { fetchSingleMovie })(SingleMovie);
