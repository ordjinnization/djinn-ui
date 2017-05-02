/**
 *
 */
'use strict';

import {
  REQUEST_HEATMAP,
  REQUEST_HEATMAP_FAILURE,
  REQUEST_HEATMAP_SUCCESS,
  REQUEST_PROJECTS,
  REQUEST_PROJECTS_SUCCESS
} from './constants';

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

export const requestProjects = () => {
  return {
    type: REQUEST_PROJECTS
  };
};

export const requestProjectsSuccess = (projects) => {
  return {
    type: REQUEST_PROJECTS_SUCCESS,
    projects
  };
};
