import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchActing,
  changeActingPage,
} from '../../store/actions/actingActions';
import { Body, Title, Header } from '../styledComponents/styledComponents';
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

class Acting extends Component {
  componentDidMount() {
    const { fetchActing, castId } = this.props;
    fetchActing(1, castId);
  }

  componentDidUpdate(prevProps) {
    const { castId, page, fetchActing } = this.props;

    if (prevProps.page !== page) {
      fetchActing(page, castId);
    }
  }
  render() {
    const {
      loading,
      items,
      image,
      page,
      total_pages,
      changeActingPage,
    } = this.props;

    if (loading) {
      return <Loader />;
    }
    let imageUrl = `${image.url}/${image.sizes.poster_sizes[0]}`;
    const itemsArr = items.map((item) => (
      <Cover
        key={item.id}
        item={item}
        url={imageUrl}
        path={`/movie/${item.id}`}
      />
    ));
    return (
      <Wrapper>
        <Header>
          <RecomTitle>Recomandations</RecomTitle>
        </Header>
        <RecomBody>
          {items.length ? (
            itemsArr
          ) : (
            <NotfoundMsg>
              There is no recomandation based on this movie
            </NotfoundMsg>
          )}
        </RecomBody>
        <Pagination
          currentPage={page}
          maxBtns={5}
          totalPage={items.length ? total_pages : 0}
          changePage={changeActingPage}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ acting, app }) => ({
  loading: acting.loading,
  items: acting.items,
  page: acting.page,
  total_pages: acting.total_pages,
  image: app.image,
});

export default connect(mapStateToProps, { fetchActing, changeActingPage })(
  Acting
);
