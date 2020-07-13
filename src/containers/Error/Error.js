import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  ErrorWrapper,
  ErrorTitle,
  ErrorImg,
  ErrorText,
  btnStyle,
} from '../../components/styledComponents/styledComponents';
import pageNotFound from '../../img/page-not-found.svg';
import serverDown from '../../img/server-down.svg';

const ErrorBtn = styled(Link)`
  ${btnStyle}
`;

class ErrorPage extends Component {
  render() {
    let imgUrl = pageNotFound;
    if (this.props.code !== 404) {
      imgUrl = serverDown;
    }

    return (
      <ErrorWrapper sidebarOpen={this.props.sidebarOpen}>
        <ErrorTitle>Error</ErrorTitle>
        <ErrorImg src={imgUrl} alt="error" />
        <ErrorText>{this.props.message}</ErrorText>
        <ErrorBtn to="/">Home Page</ErrorBtn>
      </ErrorWrapper>
    );
  }
}

const mapStateToProps = ({ error, app }) => ({
  code: error.code,
  message: error.message,
  sidebarOpen: app.sidebarOpen,
});

export default connect(mapStateToProps)(ErrorPage);
