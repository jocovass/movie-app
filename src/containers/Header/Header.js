import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarToggleBtn from '../../components/Navbar/NavbarToggle/NavbarToggleBtn';

const HeaderWrapper = styled.header`
  padding: ${({ sidebarIsOpen }) =>
    sidebarIsOpen ? '1rem 15rem' : '1rem 2rem'};
  transition: 0.5s ease-in-out;
`;

class Header extends Component {
  state = {
    sidebarIsOpen: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({ sidebarIsOpen: !prevState.sidebarIsOpen }));
  };

  render() {
    return (
      <HeaderWrapper sidebarIsOpen={this.state.sidebarIsOpen}>
        <NavbarToggleBtn
          isOpen={this.state.sidebarIsOpen}
          toggleHandler={this.toggleSidebar}
        />
        {/* <button>ToggleBTN</button>
        <div className="serchbox-wrapper">
          <form>
            <input type="text" placeholder="search.." name="search" />
            <button>SearchIcon</button>
          </form>
        </div>
        <div className="custom-dropdown">Dropdown</div> */}
      </HeaderWrapper>
    );
  }
}

export default Header;
