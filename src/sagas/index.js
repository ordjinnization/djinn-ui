/**
 *
 */
'use strict';

import {call, put} from 'redux-saga/effects';
import {requestHeatmapSuccess} from '../actions/index';
import {fetchHeatmap} from '../services/djinnApi';

export function* fetchHeatmapSaga() {
  const response = yield call(fetchHeatmap);
  yield put(requestHeatmapSuccess(response));
}

