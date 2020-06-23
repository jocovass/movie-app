import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { init } from './store/actions/index';
import Header from './containers/Header/Header';
import Loader from './components/Loader/Loader';

function App({ loading, init, clearInit }) {
  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
    </>
  );
}

const mapStateToProps = (store) => ({
  loading: store.app.loading,
});

export default connect(mapStateToProps, { init })(App);
