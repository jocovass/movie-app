import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Sidebar from '../../components/Navbar/Sidebar';
import Backdrop from '../../components/Backdrop/Backdrop';
import NavbarToggleBtn from '../../components/Navbar/NavbarToggle/NavbarToggleBtn';
import Search from '../../components/Search/Search';

const HeaderWrapper = styled.header`
  margin-left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '20em' : '0')};
  overflow: hidden;
  min-width: 320px;
  padding: 1.5rem;
  transition: 0.4s ease-in-out;
  display: flex;
  align-content: center;
  justify-content: space-between;

  .slide-enter {
    transform: translateX(-100%);
  }

  .slide-enter-done {
    transform: translateX(0%);
  }

  .slide-exit {
    transform: translateX(0%);
  }

  .slide-exit-done {
    transform: translateX(-100%);
  }
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
    const { sidebarIsOpen } = this.state;
    return (
      <HeaderWrapper sidebarIsOpen={sidebarIsOpen}>
        {sidebarIsOpen ? <Backdrop toggleHandler={this.toggleSidebar} /> : null}
        <Sidebar isOpen={sidebarIsOpen} />
        <NavbarToggleBtn
          isOpen={sidebarIsOpen}
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
