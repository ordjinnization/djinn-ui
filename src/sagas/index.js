/**
 *
 */
'use strict';
import {fork} from 'redux-saga/effects';
import {
  watchfetchHeatmap,
  watchfetchHeatmapForProjectSaga,
  watchFetchProjectsSaga
} from '../components/card/heatmap/sagas';
import {watchFetchLatestResults} from '../components/card/failtable/saga';

export default function* rootSaga() {
  yield [
    fork(watchfetchHeatmap),
    fork(watchfetchHeatmapForProjectSaga),
    fork(watchFetchProjectsSaga),
    fork(watchFetchLatestResults)
  ];
}

