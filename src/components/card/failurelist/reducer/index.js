/**
 * Reducers for failtable.
 */
'use strict';
import {REQUEST_LATEST_FAILURE, REQUEST_LATEST_SUCCESS} from '../action';

/**
 * Handle events for the latest failures.
 * @param state
 * @param action
 * @returns {*}
 */
export const latestFailures = (state = {failures: [], hasError: false}, action) => {
  switch (action.type) {
    case REQUEST_LATEST_SUCCESS:
      const failures = action.data.results.reduce((acc, result) => {
        return result.status === 'FAILED' ?
          acc.concat([{appName: result.repository, description: result.stage_failed}]) : acc;
      }, []);
      return {...state, failures};
    case REQUEST_LATEST_FAILURE:
      return state;
    default:
      return state;
  }
};
