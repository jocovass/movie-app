import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import NavbarToggleBtn from '../../components/Navbar/NavbarToggle/NavbarToggleBtn';
import Search from '../../components/Search/Search';

const HeaderWrapper = styled.header`
  margin-left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '21.5rem' : '0')};
  /* width: 1000px; */
  overflow: hidden;
  min-width: 320px;
  padding: 1.5rem;
  transition: 0.5s ease-in-out;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const options = [
  { name: 'Popularity', default: true },
  { name: 'Average Vote', default: false },
  { name: 'Title', default: false },
];

class Header extends Component {
  state = {
    sidebarIsOpen: false,
  };

  clickHeandler = () => {
    this.toggleSidebar();
  };

  keyPressHandler = (e) => {
    if (e.keyCode === 13) this.toggleSidebar();
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({ sidebarIsOpen: !prevState.sidebarIsOpen }));
  };

  render() {
    return (
      <HeaderWrapper sidebarIsOpen={this.state.sidebarIsOpen}>
        <Navbar isOpen={this.state.sidebarIsOpen} />
        <NavbarToggleBtn
          isOpen={this.state.sidebarIsOpen}
          clickHandler={this.clickHeandler}
          keyPressHandler={this.keyPressHandler}
          toggleHandler={this.toggleSidebar}
        />
        <Search />
      </HeaderWrapper>
    );
  }
}

export default Header;
