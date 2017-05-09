/**
 * Tests for failtable sagas.
 */
'use strict';

import {expect} from 'chai';
import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchLatestResultsSaga,watchFetchLatestResults} from './';
import {requestLatestSuccess} from '../action';

describe('failtable sagas', () => {

  describe('watchFetchLatestFailures', () => {
    let gen;

    beforeEach(() => {
      gen = watchFetchLatestResults();
    });

    it('should await action', () => {
      expect(gen.next().value).to.deep.equal(takeEvery('request.failtable.latest', fetchLatestResultsSaga));
    });
  });

  describe('fetchLatestFailures', () => {
    let gen;

    beforeEach(() => {
      gen = fetchLatestResultsSaga();
    });

    it('should put success action', () => {
      gen.next();
      const t = {data:'test'};
      const expected = put(requestLatestSuccess('test'));
      const actual = gen.next(t).value;
      expect(actual).to.deep.equal(expected);
    });
  });
});
