/**
 * Actions for the failures table card.
 */
'use strict';

export const REQUEST_LATEST = 'request.failtable.latest';
export const REQUEST_LATEST_SUCCESS = 'request.failtable.latest.success';
export const REQUEST_LATEST_FAILURE = 'request.failtable.latest.failure';


export const requestLatest = () => {
  return {
    type: REQUEST_LATEST
  };
};

export const requestLatestSuccess = (data) => {
  return {
    type: REQUEST_LATEST_SUCCESS,
    data
  };
};

export const requestLatestFailure = (error) => {
  return {
    type: REQUEST_LATEST_FAILURE,
    error
  };
};
