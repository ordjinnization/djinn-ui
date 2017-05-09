/**
 * Tests for failtable sagas.
 */
'use strict';

import {expect} from 'chai';
import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchLatestFailures,watchFetchLatestFailures} from './';

describe('failtable sagas', () => {

  describe('watchFetchLatestFailures', () => {
    let gen;

    beforeEach(() => {
      gen = watchFetchLatestFailures();
    });

    it('should await "request.failtable.latest" action', () => {
      expect(gen.next().value).to.deep.equal(takeEvery('request.failtable.latest', fetchLatestFailures));
    });
  });
});
