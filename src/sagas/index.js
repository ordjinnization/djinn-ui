/**
 *
 */
'use strict';
import {fork} from 'redux-saga/effects';
import {watchFetchProjectsSaga, watchfetchHeatmap, watchfetchHeatmapForProjectSaga} from '../components/card/sagas/index';

export default function* rootSaga() {
  yield [
    fork(watchfetchHeatmap),
    fork(watchfetchHeatmapForProjectSaga),
    fork(watchFetchProjectsSaga),
  ];
}

