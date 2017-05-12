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
import {watchFetchLatestResults} from '../components/card/failurelist/saga';

export default function* rootSaga() {
  yield [
    fork(watchfetchHeatmap),
    fork(watchfetchHeatmapForProjectSaga),
    fork(watchFetchProjectsSaga),
    fork(watchFetchLatestResults)
  ];
}

