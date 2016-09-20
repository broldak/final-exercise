import React from 'react';
import NavContainer from '../containers/NavContainer';
import { Link } from 'react-router'

const Header = () => (
  <nav>
    <div className="logo-section">
      <Link to="/"><h1>Final</h1></Link>
    </div>

    <div className="nav-list">
      <NavContainer />
    </div>
  </nav>
);

export default Header;
