import React from 'react';
import Header from './Header';
import ActivityByMonthContainer from '../containers/ActivityByMonthContainer';
import ActivitiesContainer from '../containers/ActivitiesContainer';
import Footer from './Footer';

const App = () => (
  <div>
    <Header />
    <ActivitiesContainer />
  </div>
);

export default App;
