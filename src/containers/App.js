import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../store/actions/index';
import Loader from '../components/Loader/Loader';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import TVShows from './TVShow/TVShows';

class App extends Component {
  componentDidMount() {
    console.log('valami');
    this.props.init();
  }
  render() {
    const { loading } = this.props;

    if (loading) {
      return <Loader />;
    }

    return (
      <>
        <Header />
        <Redirect from="/" to="/movie" />
        <Route path="/movie" component={Movies} />
        <Route path="/tv" component={TVShows} />
      </>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  loading: app.loading,
});

export default connect(mapStateToProps, { init })(App);
