/**
 *
 */
'use strict';

import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import {latestFailures} from '../components/card/failtable/reducers';
import {heatmap, heatmapErrors, projects, projectsErrors} from '../components/card/heatmap/reducers';


const rootReducer = () => {
  return combineReducers({
    latestFailures,
    heatmap,
    projects,
    heatmapErrors,
    projectsErrors,
    routing: routerReducer
  });
};

export default rootReducer;
