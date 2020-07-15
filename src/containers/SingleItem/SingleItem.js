import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchSingleItem } from '../../store/actions/singleItemActions';
import {
  Wrapper,
  Title,
  TertiaryTitle,
  ImgContainer,
  Img,
} from '../../components/styledComponents/styledComponents';
import Loader from '../../components/Loader/Loader';
import Banner from '../../components/Banner/Banner';
import Cast from '../../components/Cast/Cast';
import Recomandations from '../Recomandations/Recomandations';
import blank_canvas from '../../img/blank_canvas.svg';

const ItemWrap = styled(Wrapper)`
  padding: 0;
  @media only screen and (min-width: 40em) {
    padding: 2rem 2rem 0;
  }
`;

const SingleItemContainer = styled.div`
  @media only screen and (min-width: 40em) {
    margin: 3rem auto 4rem;
    max-width: 700px;
  }

  @media only screen and (min-width: 62.5em) {
    margin-top: 0;
  }

  @media only screen and (min-width: 81.25em) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
  }
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
  width: 100%;
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
    margin-bottom: 3rem;
  }
  .genre-item {
    margin-right: 1rem;
    margin-bottom: 1rem;
    display: inline-block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: var(--clr-primary);
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid var(--clr-primary-light);
    border-radius: 100px;
    transition: color 0.15s ease-in-out;

    &:hover {
      border-color: var(--clr-info);
    }
  }
  .summary {
    margin-bottom: 4rem;

    &-body {
      line-height: 1.8;
      font-size: 1rem;
      color: var(--clr-primary-light);
    }
  }

  @media only screen and (min-width: 37.5em) {
    padding: 2rem 2rem 0;
    flex-basis: 200px;

    .summary-body {
      font-size: 1.1rem;
    }
  }
`;

class SingleItem extends Component {
  componentDidMount() {
    const department = this.props.location.pathname.split('/')[1];
    this.props.fetchSingleItem(this.props.match.params.id, department);
  }

  componentDidUpdate(prevProps) {
    const department = this.props.location.pathname.split('/')[1];
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchSingleItem(this.props.match.params.id, department);
    }
  }

  render() {
    const { image, singleItem, loading, cast } = this.props;
    const department = this.props.location.pathname.split('/')[1];
    let imgUrl = blank_canvas;
    if (singleItem.backdrop_path) {
      imgUrl = `${image.url}${image.sizes.backdrop_sizes[1]}${singleItem.backdrop_path}`;
    }
    if (loading) {
      return <Loader />;
    }

    return (
      <ItemWrap sidebarOpen={this.props.sidebarOpen}>
        <SingleItemContainer>
          <ImgContainer>
            <Img src={imgUrl} />
            <Banner
              imdbId={singleItem.imdb_id}
              trailerId={singleItem.videos.results[0]}
              voteAverage={singleItem.vote_average}
              voteCount={singleItem.vote_count}
            />
          </ImgContainer>
          <ItemDetails>
            <ItemTitle>{singleItem.title || singleItem.name}</ItemTitle>
            <div className="status">
              <span className="release_date">
                {singleItem.release_date || singleItem.first_air_date}
              </span>
              <span className="duration">
                {formTime(singleItem.runtime || 0)}
              </span>
            </div>
            <div className="genres">
              {singleItem.genres
                ? singleItem.genres.map((genre) => {
                    return (
                      <Link
                        key={genre.id}
                        to={`/discover/${department}/${genre.id}`}
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
              <p className="summary-body">{singleItem.overview}</p>
            </div>
            <Cast cast={cast} image={image} />
          </ItemDetails>
        </SingleItemContainer>
        <Recomandations itemId={singleItem.id} department={department} />
      </ItemWrap>
    );
  }
}

const formTime = (time) => {
  if (time === 0) return '';

  const h = Math.floor(time / 60);
  const min = time % 60;

  return `${h}h${min ? ` ${min}min` : ''}`;
};

const mapStateToProps = ({ app, singleItem }) => ({
  sidebarOpen: app.sidebarOpen,
  image: app.image,
  singleItem: singleItem.data,
  cast: singleItem.cast,
  loading: singleItem.loading,
});

export default connect(mapStateToProps, { fetchSingleItem })(SingleItem);
