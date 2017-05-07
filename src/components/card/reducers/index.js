/**
 *
 */
'use strict';
import {
  REQUEST_HEATMAP_FOR_PROJECT_SUCCESS,
  REQUEST_HEATMAP_FOR_PROJECT_FAILURE,
  REQUEST_HEATMAP_SUCCESS,
  REQUEST_HEATMAP_FAILURE,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILURE

} from '../actions/constants';

export const heatmap = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_HEATMAP_SUCCESS:
      return action.heatmapData;
    case REQUEST_HEATMAP_FAILURE:
      return action.error;
    case REQUEST_HEATMAP_FOR_PROJECT_SUCCESS:
      return action.heatmapData;
    case REQUEST_HEATMAP_FOR_PROJECT_FAILURE:
      return action.error;
    default:
      return state;
  }
};

export const projects = (state = [], action) => {
  switch (action.type) {
    case REQUEST_PROJECTS_SUCCESS:
      return action.projects.projects;
    case REQUEST_PROJECTS_FAILURE:
      return action.error;
    default:
      return state;
  }
};
