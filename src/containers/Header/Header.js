import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarToggleBtn from '../../components/Navbar/NavbarToggle/NavbarToggleBtn';
import Search from '../../components/Search/Search';

const HeaderWrapper = styled.header`
  padding: ${({ sidebarIsOpen }) =>
    sidebarIsOpen ? '1.5rem 1.5rem 1.5rem 15rem' : '1.5rem'};
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
