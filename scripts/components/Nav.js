import React from 'react';
import { Link, browserHistory } from 'react-router'

const Nav = ({ currentRoute }) => (
  <div>
    <Link to="/transactions" className={currentRoute === '/transactions' ? 'active' : null}>Transactions</Link>
    <Link to="/" className={currentRoute === '/' ? 'active' : null}>Activities</Link>
  </div>
);

export default Nav;
