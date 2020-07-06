import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../store/actions/index';
import Loader from '../components/Loader/Loader';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import TVShows from './TVShow/TVShows';
import SingleMovie from './SingleMovie/SingleMovie';

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
          <Redirect from="/" exact to="/movies" />
          <Route path="/movies" component={Movies} />
          <Route path="/tvs/:page" component={TVShows} />
          <Route path="/movie/:id" component={SingleMovie} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  loading: app.loading,
});

export default connect(mapStateToProps, { init })(App);
