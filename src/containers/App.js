import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../store/actions/index';
import Loader from '../components/Loader/Loader';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import TVShows from './TVShow/TVShows';
import SingleMovie from './SingleMovie/SingleMovie';
import DiscoverMovies from './DiscoverMovies/DiscoverMovies';
import Person from './Person/Person';

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
          <Route path="/discover/movie/:genreId" component={DiscoverMovies} />
          <Route path="/person/:personId" component={Person} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  loading: app.loading,
});

export default connect(mapStateToProps, { init })(App);
