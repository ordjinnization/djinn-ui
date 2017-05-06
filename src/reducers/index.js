/**
 *
 */
'use strict';

import {heatmap, projects} from '../components/card/reducers';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

const rootReducer = () => {
  return combineReducers({
    heatmap,
    projects,
    routing: routerReducer
  });
};

export default rootReducer;
