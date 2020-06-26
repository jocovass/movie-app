import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchMovies } from '../../store/actions/movieActions';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return <div>Movies bitches</div>;
  }
}

export default connect(null, { fetchMovies })(Movies);
