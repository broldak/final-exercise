import React from 'react';
import { Link, browserHistory } from 'react-router'

const Header = () => (
  <nav>
    <h1>Final</h1>

    <Link to="/transactions">Transactions</Link>
    <Link to="/">Activities</Link>
  </nav>
);

export default Header;
