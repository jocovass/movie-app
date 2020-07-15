import React, { Component, createRef } from 'react';
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
  position: relative;
  min-height: 20rem;
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
  constructor(props) {
    super(props);
    this.compRef = createRef();
  }
  componentDidMount() {
    const { fetchActing, castId } = this.props;
    fetchActing(1, castId);
  }

  componentDidUpdate(prevProps) {
    const { castId, page, fetchActing } = this.props;

    if (prevProps.page !== page) {
      fetchActing(page, castId);
      const pos = this.compRef.current.offsetTop - 100;
      window.scrollTo({
        top: pos,
        left: 0,
        behavior: 'smooth',
      });
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
    let imageUrl = `${image.url}/${image.sizes.poster_sizes[1]}`;
    const itemsArr = items.map((item) => (
      <Cover
        key={item.id}
        item={item}
        url={imageUrl}
        path={`/movie/${item.id}`}
      />
    ));
    let content = (
      <Body>
        {items.length ? (
          itemsArr
        ) : (
          <NotfoundMsg>
            There is no recomandation based on this movie
          </NotfoundMsg>
        )}
      </Body>
    );
    if (loading) {
      content = <Loader />;
    }

    return (
      <Wrapper ref={this.compRef}>
        <Header>
          <RecomTitle>Acting</RecomTitle>
        </Header>
        {content}
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
