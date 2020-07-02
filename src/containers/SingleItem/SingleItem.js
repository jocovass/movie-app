import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { fetchMovie } from '../../store/actions/movieActions';
import {
  Wrapper,
  Header,
  Body,
  Title,
} from '../../components/styledComponents/styledComponents';
import Loader from '../../components/Loader/Loader';
import Banner from '../../components/Banner/Banner';

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
    margin-bottom: 3rem;
    &-title {
      font-size: 1.3rem;
      letter-spacing: 1px;
      font-weight: 400;
      margin-bottom: 1rem;
    }
    &-body {
      line-height: 1.8;
      font-size: 1rem;
      color: var(--clr-primary-light);
    }
  }
`;

class SingleItem extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    console.log('movie');
  }
  render() {
    const { image, singleItem, loading } = this.props;
    let imageUrl = '';
    if (image.url) {
      imageUrl = `${image.url}${image.sizes.backdrop_sizes[1]}${singleItem.backdrop_path}`;
    }
    if (loading) {
      return <Loader />;
    }
    return (
      <Wrapper sidebarOpen={this.props.sidebarOpen} style={{ padding: 0 }}>
        <ImgContainer>
          <Img src={imageUrl} />
          <Banner />
        </ImgContainer>
        <ItemDetails>
          <ItemTitle>{singleItem.title || singleItem.name}</ItemTitle>
          <div className="status">
            <span className="release_date">2019-12-18</span>
            <span className="duration">{formTime(140)}</span>
          </div>
          <div className="genres">
            <a href="/" className="genre-item">
              Action
            </a>
            <a href="/" className="genre-item">
              Biography
            </a>
            <a href="/" className="genre-item">
              Drama
            </a>
          </div>
          <div className="summary">
            <h3 className="summary-title">Plot Summary</h3>
            <p className="summary-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              eum a voluptatibus quam porro ea. Recusandae eaque quas,
              aspernatur vitae magnam quasi. Sit, exercitationem doloremque
              rerum earum explicabo possimus et.
            </p>
          </div>
        </ItemDetails>
      </Wrapper>
    );
  }
}

const formTime = (time) => {
  const h = Math.floor(time / 60);
  const min = time % 60;

  return `${h}h ${min}min`;
};

const mapStateToProps = ({ app, api }) => ({
  sidebarOpen: app.sidebarOpen,
  image: app.image,
  singleItem: api.singleItem,
  cast: api.cast,
  related: api.related,
  loading: api.loading,
});

export default connect(mapStateToProps, { fetchMovie })(SingleItem);
