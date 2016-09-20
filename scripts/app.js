import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import todoApp from './reducers';
import App from './components/App';
import ActivityWrap from './components/ActivityWrap';
import TransactionsWrap from './components/TransactionsWrap';
import TransactionWrap from './components/TransactionWrap';
import Chart from 'chart.js';

let store = createStore(todoApp);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ActivityWrap}/>
        <Route path="transactions" component={TransactionsWrap}/>
        <Route path="transaction/:id" component={TransactionWrap}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
