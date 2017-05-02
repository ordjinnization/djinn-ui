/**
 *
 */
'use strict';

import {call, fork, put} from 'redux-saga/effects';
import {requestHeatmapSuccess, requestProjectsSuccess} from '../actions/index';
import {fetchHeatmap, fetchProjects} from '../api/djinnApi';

export default function* rootSaga () {
  yield [
    fork(fetchHeatmapSaga),
    fork(fetchProjectsSaga),
  ];
}

export function* fetchHeatmapSaga() {
  const response = yield call(fetchHeatmap);
  yield put(requestHeatmapSuccess(response));
}

export function* fetchProjectsSaga() {
  const response = yield call(fetchProjects);
  yield put(requestProjectsSuccess(response));
}
