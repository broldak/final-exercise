import { combineReducers } from 'redux'
import activity from '../data/activity';
import { SET_TYPE_FILTER, TYPE_FILTERS } from './actions'

const { ALL } = TYPE_FILTERS;

/* Reducers */

//Initially sort most recent to least recent
function sortByDate (item1, item2) {
  const date1 = item1.activity_datetime;
  const date2 = item2.activity_datetime;

  return date1 < date2 ? 1 : date1 === date2 ? 0 : -1;
}

function activities(state = activity.sort(sortByDate), action) {
  return state;
}

function typeFilter(state = ALL, action) {
  switch (action.type) {
    case SET_TYPE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const vizApp = combineReducers({
  typeFilter,
  activities
});

export default vizApp;
