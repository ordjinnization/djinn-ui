/**
 *
 */
'use strict';

import {REQUEST_HEATMAP, REQUEST_HEATMAP_FAILURE, REQUEST_HEATMAP_SUCCESS} from './constants';

export const requestHeatmap = () => {
  return {
    type: REQUEST_HEATMAP,
  };
};

export const requestHeatmapSuccess = (heatmapData) => {
  return {
    type: REQUEST_HEATMAP_SUCCESS,
    heatmapData
  };
};

export const requestHeatmapFailure = (errorMsg) => {
  return {
    type: REQUEST_HEATMAP_FAILURE,
    errorMsg
  };
};
