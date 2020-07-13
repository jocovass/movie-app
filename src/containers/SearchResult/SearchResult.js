import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchSearch,
  changeSearchPage,
} from '../../store/actions/searchActions';
import Loader from '../../components/Loader/Loader';
import Cover from '../../components/Cover/Cover';
import Pagination from '../../components/Pagination/Pagination';
import {
  Wrapper,
  Header,
  Body,
  Title,
  ErrorImg,
  btnStyle,
} from '../../components/styledComponents/styledComponents';
import notFound from '../../img/page-not-found.svg';
import styled from 'styled-components';

const NoSerchResult = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const Button = styled(Link)`
  ${btnStyle}
  margin-top: 4rem;
`;

class SearchResults extends Component {
  async componentDidMount() {
    const { query } = this.props.match.params;
    this.props.fetchSearch(1, query);
  }

  componentDidUpdate(prevProps) {
    const { query } = this.props.match.params;
    const { page, location } = this.props;

    if (prevProps.location.pathname !== location.pathname) {
      this.props.fetchSearch(1, query);
    } else if (prevProps.page !== page) {
      this.props.fetchSearch(page, query);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const {
      items,
      loading,
      image,
      total_pages,
      page,
      changeSearchPage,
    } = this.props;
    let imageUrl = `${image.url}/${image.sizes.poster_sizes[0]}`;

    if (loading) {
      return <Loader />;
    }
    return (
      <Wrapper sidebarOpen={this.props.sidebarOpen}>
        <Header>
          <Title>Search Results</Title>
        </Header>
        <Body>
          {items.length ? (
            items.map((item) => (
              <Cover
                key={item.id}
                item={item}
                url={imageUrl}
                path={`/movie/${item.id}`}
              />
            ))
          ) : (
            <NoSerchResult>
              <ErrorImg src={notFound} alt="not found" />
              <Button to="/">Go Home</Button>
            </NoSerchResult>
          )}
        </Body>
        <Pagination
          currentPage={page}
          maxBtns={5}
          totalPage={total_pages}
          changePage={changeSearchPage}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ search, app }) => ({
  sidebarOpen: app.sidebarOpen,
  image: app.image,
  selected: app.selected,
  page: search.page,
  newPage: search.newPage,
  total_pages: search.total_pages,
  items: search.items,
  loading: search.loading,
});

export default connect(mapStateToProps, { fetchSearch, changeSearchPage })(
  SearchResults
);
