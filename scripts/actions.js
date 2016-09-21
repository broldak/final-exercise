/* Action types */

export const SET_TYPE_FILTER = 'SET_FILTER';

/* Action Creators */
export const TYPE_FILTERS = {
  TRANSACTION: 'TRANSACTION',
  FEE: 'FEE',
  REWARD: 'REWARD',
  PAYMENT: 'PAYMENT',
  ALL: 'ALL'
};

// setTypeFilter
// Returns object with action type and filter value
export function setTypeFilter(filter) {
  return {type: SET_TYPE_FILTER, filter};
}
