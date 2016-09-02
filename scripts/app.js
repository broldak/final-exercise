import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import activity from '../data/activity';

function counter(state = 0, action) {
  return state;
}

render(
  <App />,
  document.getElementById('app')
);
