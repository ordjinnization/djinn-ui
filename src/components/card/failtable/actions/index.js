/**
 * Actions for the failures table card.
 */
'use strict';

export const REQUEST_LATEST =  'request.failtable.latest';
export const REQUEST_LATEST_SUCCESS =  'request.failtable.latest.success';

export const requestLatest = () => {
  return { type: REQUEST_LATEST };
};

export const requestLatestSuccess = (latestResults) => {
  return {
    type: REQUEST_LATEST_SUCCESS,
    latestResults
  };
};
