/**
 *
 */
'use strict';
import {REQUEST_HEATMAP_SUCCESS} from '../actions/constants';

export default function heatmap(state = {}, action) {
  switch (action.type) {
    case REQUEST_HEATMAP_SUCCESS:
      return action.heatmapData;
    default:
      return state
  }
}
