import React, { Component } from 'react';
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

class Recomandations extends Component {
  componentDidMount() {
    const { fetchRec, itemId, page, department } = this.props;
    fetchRec(itemId, page, department);
  }

  componentDidUpdate(prevProps) {
    const { itemId, page, fetchRec, department } = this.props;

    if (prevProps.page !== page) {
      fetchRec(itemId, page, department);
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
    let imageUrl = `${image.url}/${image.sizes.poster_sizes[0]}`;

    const itemsArr = items.map((item) => (
      <Cover
        key={item.id}
        item={item}
        url={imageUrl}
        path={`/${department}/${item.id}`}
      />
    ));

    if (loading) {
      return <Loader />;
    }
    return (
      <Wrapper>
        <RecomTitle>Recomandations</RecomTitle>
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

export default connect(mapStateToProps, { fetchRec, changeRecPage })(
  Recomandations
);
