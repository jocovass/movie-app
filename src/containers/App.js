import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../store/actions/index';
import Loader from '../components/Loader/Loader';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import TVShows from './TVShow/TVShows';
import SingleItem from './SingleItem/SingleItem';

class App extends Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    const { loading } = this.props;

    if (loading) {
      return <Loader />;
    }

    return (
      <div>
        <Header />
        <Switch>
          <Redirect from="/" exact to="/movies/1" />
          <Route path="/movies/:page" component={Movies} />
          <Route path="/tvs/:page" component={TVShows} />
          <Route path="/movie/:id" component={SingleItem} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  loading: app.loading,
});

export default connect(mapStateToProps, { init })(App);
