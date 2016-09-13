import React from 'react';
import Header from './Header';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import ActivitiesContainer from '../containers/ActivitiesContainer';
import Footer from './Footer';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default App;
