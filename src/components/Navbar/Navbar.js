import React, { useState } from 'react';

const Navbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return <nav>nav</nav>;
};

export default Navbar;
