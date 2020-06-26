import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchTVShows } from '../../store/actions/tvshowActions';

class TVShow extends Component {
  componentDidMount() {
    this.props.fetchTVShows();
  }
  render() {
    return <div>TVShows bitches</div>;
  }
}

export default connect(null, { fetchTVShows })(TVShow);
