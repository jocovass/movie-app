import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, changeItemsPage } from '../../store/actions/itemsActions';
import Loader from '../../components/Loader/Loader';
import Dropdown from '../../components/Dropdown/Dropdown';
import Cover from '../../components/Cover/Cover';
import Pagination from '../../components/Pagination/Pagination';
import {
  Wrapper,
  Header,
  Body,
  Title,
} from '../../components/styledComponents/styledComponents';

const options = [
  { name: 'Most Popular', sortBy: 'popular' },
  { name: 'Top Rated', sortBy: 'top_rated' },
];

class Items extends Component {
  state = {
    selectedOption: options[0],
  };

  async componentDidMount() {
    const department = this.props.location.pathname.split('/')[1];
    this.props.fetchItems(this.state.selectedOption.sortBy, 1, department);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, newPage, location } = this.props;
    const department = location.pathname.split('/')[1];
    const { sortBy } = this.state.selectedOption;
    if (
      prevState.selectedOption.sortBy !== sortBy ||
      prevProps.location.pathname !== location.pathname
    ) {
      this.props.fetchItems(sortBy, 1, department);
    } else if (prevProps.page !== page && newPage) {
      this.props.fetchItems(sortBy, page, department);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  setSelectedOptions = (el) => {
    this.setState({ selectedOption: el });
  };

  render() {
    const {
      items,
      loading,
      image,
      total_pages,
      page,
      changeItemsPage,
      location,
    } = this.props;
    const department = location.pathname.split('/')[1];
    let imgUrl = `${image.url}/${image.sizes.poster_sizes[0]}`;

    if (loading) {
      return <Loader />;
    }
    return (
      <Wrapper sidebarOpen={this.props.sidebarOpen}>
        <Header>
          <Title>{`${department}s`}</Title>
          <Dropdown
            options={options}
            selectedOption={this.state.selectedOption}
            setSelectedOption={this.setSelectedOptions}
          />
        </Header>
        <Body>
          {items.map((item) => (
            <Cover
              key={item.id}
              item={item}
              url={imgUrl}
              path={`/${department}/${item.id}`}
            />
          ))}
        </Body>
        <Pagination
          currentPage={page}
          maxBtns={5}
          totalPage={total_pages}
          changePage={changeItemsPage}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ items, app }) => ({
  sidebarOpen: app.sidebarOpen,
  image: app.image,
  selected: app.selected,
  page: items.page,
  newPage: items.newPage,
  total_pages: items.total_pages,
  items: items.items,
  loading: items.loading,
});

export default connect(mapStateToProps, { fetchItems, changeItemsPage })(Items);
