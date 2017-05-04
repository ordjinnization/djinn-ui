/**
 *
 */
'use strict';
import {REQUEST_HEATMAP_SUCCESS, REQUEST_PROJECTS_SUCCESS, REQUEST_HEATMAP_FOR_PROJECT_SUCCESS} from '../actions/constants';

export const heatmap = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_HEATMAP_SUCCESS:
      return action.heatmapData;
    case REQUEST_HEATMAP_FOR_PROJECT_SUCCESS:
      return action.heatmapData;
    default:
      return state;
  }
};

export const projects = (state = [], action) => {
  switch(action.type) {
    case REQUEST_PROJECTS_SUCCESS:
      return action.projects.projects;
    default:
      return state;
  }
};
