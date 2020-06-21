import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from './axios';
import Header from './containers/Header/Header';
import Loader from './components/Loader/Loader';

function App({ loading, initApp, clearInit }) {
  // useEffect(() => {
  //   // axios
  //   //   .get()
  //   //   .then((res) => console.log(res))
  //   //   .catch((err) => console.log(err));
  //   initApp();
  //   setTimeout(clearInit, 2000);
  // }, []);
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
  loading: store.loading,
});

const mapDispatchToProps = (dispatch) => ({
  initApp: () => dispatch({ type: 'loading' }),
  clearInit: () => dispatch({ type: 'loading-finished' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
