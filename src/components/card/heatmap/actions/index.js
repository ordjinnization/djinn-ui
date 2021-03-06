/**
 *
 */
'use strict';

import {
  REQUEST_HEATMAP,
  REQUEST_HEATMAP_FAILURE,
  REQUEST_HEATMAP_SUCCESS,
  REQUEST_PROJECTS,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILURE,
  REQUEST_HEATMAP_FOR_PROJECT,
  REQUEST_HEATMAP_FOR_PROJECT_SUCCESS
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

export const requestHeatmapFailure = (error) => {
  const msg = `Error: "${error.message}" encountered when fetching heatmap data.`;
  return {
    type: REQUEST_HEATMAP_FAILURE,
    error: msg
  };
};

export const requestHeatmapForProject = (project) => {
  return {
    type: REQUEST_HEATMAP_FOR_PROJECT,
    project
  };
};

export const requestHeatMapForProjectSuccess = (heatmapData) => {
  return {
    type: REQUEST_HEATMAP_FOR_PROJECT_SUCCESS,
    heatmapData
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

export const requestProjectsFailure = (error) => {
  const msg = `Error: "${error.message}" encountered when fetching projects.`;
  return {
    type: REQUEST_PROJECTS_FAILURE,
    error: msg
  };
};
