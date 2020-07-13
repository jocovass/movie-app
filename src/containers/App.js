import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../store/actions/index';
import Loader from '../components/Loader/Loader';
import Header from './Header/Header';
import Items from './Items/Items';
const SingleItem = lazy(() => import('./SingleItem/SingleItem'));
const SearchResult = lazy(() => import('./SearchResult/SearchResult'));
const Person = lazy(() => import('./Person/Person'));
const Discover = lazy(() => import('./Discover/Discover'));
const ErrorPage = lazy(() => import('./Error/Error'));
const NoMatch = lazy(() => import('../components/NoMatch/NoMatch'));

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
        <Suspense fallback={<Loader />}>
          <Switch>
            <Redirect from="/" exact to="/movie" />
            <Route path="/movie" exact component={Items} />
            <Route path="/tv" exact component={Items} />
            <Route path="/movie/:id" component={SingleItem} />
            <Route path="/tv/:id" component={SingleItem} />
            <Route path="/search/:query" component={SearchResult} />
            <Route path="/discover/movie/:genreId" component={Discover} />
            <Route path="/discover/tv/:genreId" component={Discover} />
            <Route path="/person/:personId" component={Person} />
            <Route path="/error" component={ErrorPage} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  loading: app.loading,
});

export default connect(mapStateToProps, { init })(App);
