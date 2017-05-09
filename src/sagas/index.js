/**
 *
 */
'use strict';
import {fork} from 'redux-saga/effects';
import {watchFetchProjectsSaga, watchfetchHeatmap, watchfetchHeatmapForProjectSaga} from '../components/card/heatmap/sagas/index';

export default function* rootSaga() {
  yield [
    fork(watchfetchHeatmap),
    fork(watchfetchHeatmapForProjectSaga),
    fork(watchFetchProjectsSaga),
  ];
}

