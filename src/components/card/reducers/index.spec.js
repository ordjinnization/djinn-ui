/**
 *
 */
'use strict';
import {expect} from 'chai';
import {heatmap} from './';

describe('heatmap card reducer', () => {

  it('should  have initial state of an empty object', () => {
    const action = {
      type: 'Unknown'
    };
    expect(heatmap(undefined, action)).to.deep.equal({});
  });

  it('should return given heatmap data for "request.heatmap.success"', () => {
    const heatmapData = {test: 'test'};
    const action = {
      type: 'request.heatmap.success',
      heatmapData
    };
    expect(heatmap(undefined, action)).to.equal(heatmapData);
  });

  it('should return given heatmap data for "request.heatmap.project.success"', () => {
    const heatmapData = {test: 'test'};
    const action = {
      type: 'request.heatmap.project.success',
      heatmapData
    };
    expect(heatmap(undefined, action)).to.equal(heatmapData);
  });

  it('should return error for "request.heatmap.project.failure"', () => {
    const error = "Failure!!";
    const action = {
      type: 'request.heatmap.project.failure',
      error
    };
    expect(heatmap(undefined, action)).to.equal(error);
  });

  it('should return error for "request.heatmap.failure"', () => {
    const error = "Failure!!";
    const action = {
      type: 'request.heatmap.failure',
      error
    };
    expect(heatmap(undefined, action)).to.equal(error);
  });
});
