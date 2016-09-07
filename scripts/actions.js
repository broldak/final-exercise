/* Action types */

export const SET_TYPE_FILTER = 'SET_FILTER';

/* Action Creators */

export const TYPE_FILTERS = {
  TRANSACTION: 'TRANSACTION',
  FEE: 'FEE',
  REWARD: 'REWARD',
  PAYMENT: 'PAYMENT',
  OTHER: 'OTHER',
  ALL: 'ALL'
};

export function setTypeFilter(filter) {
  return {type: SET_TYPE_FILTER, filter};
}
