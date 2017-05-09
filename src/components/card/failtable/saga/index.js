/**
 * Sagas for the failtable.
 */
'use strict';
import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchLatestResults} from '../../../../api/djinn';
import {REQUEST_LATEST, requestLatestFailure, requestLatestSuccess} from '../action';

export function* watchFetchLatestResults() {
  yield takeEvery(REQUEST_LATEST, fetchLatestResultsSaga);
}

export function* fetchLatestResultsSaga() {
  const {data, error} = yield call(fetchLatestResults);
  if (data)
    yield put(requestLatestSuccess(data));
  else
    yield put(requestLatestFailure(error));
}
