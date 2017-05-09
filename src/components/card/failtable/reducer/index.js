/**
 * Reducers for failtable.
 */
'use strict';
import {REQUEST_LATEST_SUCCESS} from '../action';

export const latestFailures = (state = [], action) => {
  switch(action.type) {
    case REQUEST_LATEST_SUCCESS:
      return action.data;
    default:
      return state;
  }
};
