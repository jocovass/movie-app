import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  ErrorWrapper,
  ErrorTitle,
  ErrorImg,
  ErrorText,
  btnStyle,
} from '../../components/styledComponents/styledComponents';
import pageNotFound from '../../img/page-not-found.svg';

const ErrorBtn = styled(Link)`
  ${btnStyle}
`;

const NoMatch = ({ sidebarOpen }) => {
  return (
    <ErrorWrapper sidebarOpen={sidebarOpen}>
      <ErrorTitle>Not Found</ErrorTitle>
      <ErrorImg src={pageNotFound} alt="error" />
      <ErrorText>The URL you trying to access does not exists.</ErrorText>
      <ErrorBtn to="/">Home Page</ErrorBtn>
    </ErrorWrapper>
  );
};

const mapStateToProps = ({ app }) => ({
  sidebarOpen: app.sidebarOpen,
});

export default connect(mapStateToProps)(NoMatch);
