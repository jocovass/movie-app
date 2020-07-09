import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  discover,
  changeDiscoverPage,
} from '../../store/actions/discoverActions';
import {
  Wrapper,
  Header,
  Body,
  Title,
} from '../../components/styledComponents/styledComponents';
import Dropdown from '../../components/Dropdown/Dropdown';
import Loader from '../../components/Loader/Loader';
import Cover from '../../components/Cover/Cover';
import Pagination from '../../components/Pagination/Pagination';

const options = [
  { name: 'Most Popular', sortBy: 'popularity.desc' },
  { name: 'Vote average', sortBy: 'vote_average.desc' },
  { name: 'Released', sortBy: 'release_date.desc' },
];

class Discover extends Component {
  state = {
    selectedOption: options[0],
  };

  componentDidMount() {
    const { sortBy } = this.state.selectedOption;
    const department = this.props.location.pathname.split('/')[2];
    this.props.discover(this.props.match.params.genreId, 1, sortBy, department);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, newPage, match, location } = this.props;
    const { sortBy } = this.state.selectedOption;
    const department = location.pathname.split('/')[2];

    if (
      prevState.selectedOption.sortBy !== sortBy ||
      prevProps.location.pathname !== location.pathname
    ) {
      this.props.discover(match.params.genreId, 1, sortBy, department);
    } else if (prevProps.page !== page && newPage) {
      this.props.discover(match.params.genreId, page, sortBy, department);
    }
  }

  setSelectedOption = (el) => {
    this.setState({ selectedOption: el });
  };

  render() {
    const {
      sidebarOpen,
      items,
      loading,
      image,
      selected,
      page,
      total_pages,
      changeDiscoverPage,
      location,
    } = this.props;
    const imageUrl = `${image.url}/${image.sizes.poster_sizes[0]}`;
    const department = location.pathname.split('/')[2];
    if (loading) {
      return <Loader />;
    }

    return (
      <Wrapper sidebarOpen={sidebarOpen}>
        <Header>
          <Title>{extractTitle(selected)}</Title>
          <Dropdown
            options={options}
            selectedOption={this.state.selectedOption}
            setSelectedOption={this.setSelectedOption}
          />
        </Header>
        <Body>
          {items.map((item) => (
            <Cover
              key={item.id}
              item={item}
              url={imageUrl}
              path={`/${department}/${item.id}`}
            />
          ))}
        </Body>
        <Pagination
          currentPage={page}
          maxBtns={5}
          totalPage={total_pages}
          changePage={changeDiscoverPage}
        />
      </Wrapper>
    );
  }
}

const extractTitle = (selected) => {
  const index = selected.indexOf('-');
  return selected.slice(index + 1);
};

const mapStateToProp = ({ app, discover }) => ({
  loading: discover.loading,
  items: discover.items,
  newPage: discover.newPage,
  page: discover.page,
  total_pages: discover.total_pages,
  sidebarOpen: app.sidebarOpen,
  selected: app.selected,
  image: app.image,
});

export default connect(mapStateToProp, {
  discover,
  changeDiscoverPage,
})(Discover);
