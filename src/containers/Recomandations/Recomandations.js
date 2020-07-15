import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchRec, changeRecPage } from '../../store/actions/recActions';
import {
  Body,
  Title,
} from '../../components/styledComponents/styledComponents';
import Loader from '../../components/Loader/Loader';
import Cover from '../../components/Cover/Cover';
import Pagination from '../../components/Pagination/Pagination';

const Wrapper = styled.section`
  min-height: 20rem;
  position: relative;
  padding: 0 2rem;
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

class Recomandations extends Component {
  constructor(props) {
    super(props);
    this.compRef = createRef();
  }

  componentDidMount() {
    const { fetchRec, itemId, page, department } = this.props;
    fetchRec(itemId, page, department);
  }

  componentDidUpdate(prevProps) {
    const { itemId, page, fetchRec, department } = this.props;

    if (prevProps.page !== page) {
      fetchRec(itemId, page, department);
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
      changeRecPage,
      department,
    } = this.props;
    let imageUrl = `${image.url}/${image.sizes.poster_sizes[1]}`;
    const itemsArr = items.map((item) => (
      <Cover
        key={item.id}
        item={item}
        url={imageUrl}
        path={`/${department}/${item.id}`}
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
        <RecomTitle>Recomandations</RecomTitle>
        {content}
        <Pagination
          currentPage={page}
          maxBtns={5}
          totalPage={items.length ? total_pages : 0}
          changePage={changeRecPage}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ rec, app }) => ({
  loading: rec.loading,
  items: rec.items,
  page: rec.page,
  total_pages: rec.total_pages,
  image: app.image,
});

export default connect(mapStateToProps, {
  fetchRec,
  changeRecPage,
})(Recomandations);
