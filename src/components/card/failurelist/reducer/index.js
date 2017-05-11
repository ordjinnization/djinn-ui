/**
 * Reducers for failtable.
 */
'use strict';
import {REQUEST_LATEST_SUCCESS, REQUEST_LATEST_FAILURE} from '../action';

/**
 * Handle events for the latest failures.
 * @param state
 * @param action
 * @returns {*}
 */
export const latestFailures = (state = {hasError: false}, action) => {
  switch(action.type) {
    case REQUEST_LATEST_SUCCESS:
      return {...state, failures: action.data};
    case REQUEST_LATEST_FAILURE:
      return state;
    default:
      return state;
  }
};
