'use strict';
import expect from 'expect';
import {call, put} from 'redux-saga/effects';
import {requestHeatmapSuccess} from '../actions';
import {fetchHeatmap} from '../../../../api/djinn';
import {fetchHeatmapSaga} from './';

describe('heatmap saga', () => {
  let gen;

  beforeEach(() => {
    gen = fetchHeatmapSaga();
  });

  it('should call heatmap data endpoint', () => {
    expect(gen.next().value).toEqual(call(fetchHeatmap));
  });

  it('should put expected data into the store', () => {
    gen.next();
    const expected = put(requestHeatmapSuccess('test'));
    const result = gen.next({data: 'test'}).value;
    expect(result).toEqual(expected);
  });
});
