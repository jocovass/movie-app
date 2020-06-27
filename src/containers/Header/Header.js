import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleSidebar } from '../../store/actions/index';
import Sidebar from '../../components/Navbar/Sidebar';
import Backdrop from '../../components/Backdrop/Backdrop';
import NavbarToggleBtn from '../../components/Navbar/NavbarToggle/NavbarToggleBtn';
import Search from '../../components/Search/Search';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: var(--clr-secondary);
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '20em' : '0')};
  min-width: 320px;
  padding: 1.5rem;
  transition: 0.4s ease-in-out;
  display: flex;
  align-content: center;
  justify-content: space-between;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

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

class Header extends Component {
  clickHeandler = () => {
    this.props.toggleSidebar(!this.props.sidebarOpen);
  };

  keyPressHandler = (e) => {
    if (e.keyCode === 13) this.props.toggleSidebar(!this.props.sidebarOpen);
  };

  render() {
    const { sidebarOpen } = this.props;
    return (
      <HeaderWrapper sidebarOpen={sidebarOpen}>
        {sidebarOpen ? (
          <Backdrop
            toggleHandler={() =>
              this.props.toggleSidebar(!this.props.sidebarOpen)
            }
          />
        ) : null}
        <Sidebar isOpen={sidebarOpen} />
        <NavbarToggleBtn
          isOpen={sidebarOpen}
          clickHandler={this.clickHeandler}
          keyPressHandler={this.keyPressHandler}
        />
        <Search />
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  sidebarOpen: app.sidebarOpen,
});

export default connect(mapStateToProps, { toggleSidebar })(Header);
