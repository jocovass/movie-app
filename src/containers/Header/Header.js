import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarToggleBtn from '../../components/Navbar/NavbarToggle/NavbarToggleBtn';
import Search from '../../components/Search/Search';
import Dropdown from '../../components/Dropdown/Dropdown';

const HeaderWrapper = styled.header`
  padding: ${({ sidebarIsOpen }) =>
    sidebarIsOpen ? '1rem 15rem' : '1rem 2rem'};
  transition: 0.5s ease-in-out;
`;

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
        <div className="search-wrapper">
          <Search />
          <Dropdown defaultSelectedText="Popularity" />
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
