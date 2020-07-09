import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../store/actions/index';
import Loader from '../components/Loader/Loader';
import Header from './Header/Header';
import Items from './Items/Items';
import SingleItem from './SingleItem/SingleItem';
import Discover from './Discover/Discover';
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
          <Route path="/movie" exact component={Items} />
          <Route path="/tv" exact component={Items} />
          <Route path="/movie/:id" component={SingleItem} />
          <Route path="/tv/:id" component={SingleItem} />
          <Route path="/discover/movie/:genreId" component={Discover} />
          <Route path="/discover/tv/:genreId" component={Discover} />
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
