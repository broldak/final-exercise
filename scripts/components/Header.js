import React from 'react';
import NavContainer from '../containers/NavContainer';

const Header = () => (
  <nav>
    <div className="logo-section">
      <h1>Final</h1>
    </div>

    <div className="nav-list">
      <NavContainer />
    </div>
  </nav>
);

export default Header;
