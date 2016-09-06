import activity from '../data/activity';

/* Reducers */

//Initially sort most recent to least recent
function sortByDate (item1, item2) {
  const date1 = item1.activity_datetime;
  const date2 = item2.activity_datetime;

  return date1 < date2 ? 1 : date1 === date2 ? 0 : -1;
}

const initialState = {
  activities: activity.sort(sortByDate)
};

function vizApp(state = initialState, action) {
  // TODO: handle actions
  return state;
}

export default vizApp;
