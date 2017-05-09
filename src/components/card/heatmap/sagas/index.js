/**
 *
 */
'use strict';

import {call, put, takeEvery} from 'redux-saga/effects';
import {
  requestHeatMapForProjectFailure,
  requestHeatMapForProjectSuccess,
  requestHeatmapSuccess,
  requestHeatmapFailure,
  requestProjectsFailure,
  requestProjectsSuccess
} from '../actions';
import {REQUEST_HEATMAP, REQUEST_HEATMAP_FOR_PROJECT, REQUEST_PROJECTS} from '../actions/constants';
import {fetchHeatmap, fetchHeatmapForProject, fetchProjects} from '../../../../api/djinn';

export function* watchfetchHeatmap() {
  yield takeEvery(REQUEST_HEATMAP, fetchHeatmapSaga);
}

export function* fetchHeatmapSaga() {
  const {data, error} = yield call(fetchHeatmap);
  if(data)
    yield put(requestHeatmapSuccess(data));
  else
    yield put(requestHeatmapFailure(error));
}

export function* watchfetchHeatmapForProjectSaga() {
  yield takeEvery(REQUEST_HEATMAP_FOR_PROJECT, fetchHeatmapForProjectSaga);
}

export function* fetchHeatmapForProjectSaga({project}) {
  const {data, error} = yield call(fetchHeatmapForProject, project);
  if (data)
    yield put(requestHeatMapForProjectSuccess(data));
  else
    yield put(requestHeatMapForProjectFailure(error));
}

export function* watchFetchProjectsSaga() {
  yield takeEvery(REQUEST_PROJECTS, fetchProjectsSaga)
}

export function* fetchProjectsSaga() {
  const {data, error} = yield call(fetchProjects);
  if (data)
    yield put(requestProjectsSuccess(data));
  else
    yield put(requestProjectsFailure(error));
}
