'use strict';
import expect from 'expect';
import {fetchHeatmapSaga} from './index';
import {call, put} from 'redux-saga/effects';
import {fetchHeatmap} from '../services/djinnApi';
import {requestHeatmapSuccess} from '../actions/index';

describe('heatmap', () => {
  let gen;

  beforeEach(() => {
    gen = fetchHeatmapSaga();
  });

  it('should call heatmap data endpoint', () => {
    expect(gen.next().value).toEqual(call(fetchHeatmap));
  });

  it('should put expected data into the store', () => {
    gen.next();
    const expected = put(requestHeatmapSuccess({test:'test'}));
    const result = gen.next({test:'test'}).value;
    expect(result).toEqual(expected)
  });
});
