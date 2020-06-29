import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTVShows } from '../../store/actions/tvshowActions';
import axios from '../../axios';
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

class TVShows extends Component {
  state = {
    selectedOption: options[0],
  };

  async componentDidMount() {
    const { page } = this.props.match.params;
    const {
      data: { images },
    } = await axios.get('/configuration');
    this.base_url = `${images.secure_base_url}/${images.poster_sizes[4]}`;
    this.props.fetchTVShows(this.state.selectedOption.sortBy, page);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.props.match.params;
    const { sortBy } = this.state.selectedOption;
    if (prevState.selectedOption.sortBy !== sortBy) {
      this.props.fetchTVShows(sortBy, page);
    } else if (prevProps.match.params.page !== page) {
      this.props.fetchTVShows(sortBy, page);
    }
  }

  setSelectedOptions = (el) => {
    this.setState({ selectedOption: el });
  };

  render() {
    const { tvs, loading } = this.props;

    if (loading) {
      return <Loader />;
    }
    return (
      <Wrapper sidebarOpen={this.props.sidebarOpen}>
        <Header>
          <Title>Tv Shows</Title>
          <Dropdown
            options={options}
            selectedOption={this.state.selectedOption}
            setSelectedOption={this.setSelectedOptions}
          />
        </Header>
        <Body>
          {tvs.results.map((tv) => (
            <Cover key={tv.id} item={tv} url={this.base_url} />
          ))}
        </Body>
        <Pagination
          currentPage={tvs.page}
          maxBtns={5}
          totalPage={tvs.total_pages}
          path="/movie"
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ api, app }) => ({
  sidebarOpen: app.sidebarOpen,
  tvs: api.tvs,
  loading: api.loading,
});

export default connect(mapStateToProps, { fetchTVShows })(TVShows);
