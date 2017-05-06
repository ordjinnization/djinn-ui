/**
 *
 */
'use strict';

import {call, put, takeEvery} from 'redux-saga/effects';
import {requestHeatMapForProjectSuccess, requestHeatmapSuccess, requestProjectsSuccess} from '../../../actions';
import {REQUEST_HEATMAP, REQUEST_HEATMAP_FOR_PROJECT} from '../../../actions/constants';
import {fetchHeatmap, fetchHeatmapForProject, fetchProjects} from '../../../api/djinnApi';

export function* watchfetchHeatmap() {
  yield takeEvery(REQUEST_HEATMAP, fetchHeatmapSaga);
}

export function* fetchHeatmapSaga() {
  const response = yield call(fetchHeatmap);
  yield put(requestHeatmapSuccess(response));
}

export function* watchfetchHeatmapForProjectSaga() {
  yield takeEvery(REQUEST_HEATMAP_FOR_PROJECT, fetchHeatmapForProjectSaga);
}

export function* fetchHeatmapForProjectSaga({project}) {
  const response = yield call(fetchHeatmapForProject, project);
  yield put(requestHeatMapForProjectSuccess(response));
}

export function* fetchProjectsSaga() {
  const response = yield call(fetchProjects);
  yield put(requestProjectsSuccess(response));
}
