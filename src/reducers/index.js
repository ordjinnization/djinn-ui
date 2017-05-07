/**
 *
 */
'use strict';

import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import {heatmap, heatmapErrors, projects, projectsErrors} from '../components/card/reducers';

const rootReducer = () => {
  return combineReducers({
    heatmap,
    projects,
    heatmapErrors,
    projectsErrors,
    routing: routerReducer
  });
};

export default rootReducer;
