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
          <Redirect from="/" exact to="/movie/1" />
          <Route path="/movie/:page" component={Movies} />
          <Route path="/tv/:page" component={TVShows} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  loading: app.loading,
});

export default connect(mapStateToProps, { init })(App);
