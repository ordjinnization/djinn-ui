/**
 *
 */
'use strict';
import {expect} from 'chai';
import {heatmap, heatmapErrors, projects} from './';

describe('heatmap card reducers', () => {
  describe('heatmap reducer', () => {

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
  });

  describe('heatmap errors reducer', () => {
    it('should return errors for "request.heatmap.failure"', () => {
      const error = "Failure!!";
      const action = {
        type: 'request.heatmap.failure',
        error
      };
      expect(heatmapErrors(undefined, action)).to.deep.equal([error]);
    });

    it('should return errors for "request.heatmap.project.failure"', () => {
      const error = "Failure!!";
      const action = {
        type: 'request.heatmap.project.failure',
        error
      };
      expect(heatmapErrors(undefined, action)).to.deep.equal([error]);
    });
  });

  describe('projects reducer', () => {
    it('should return a list of projects when action type is "request.projects.success"', () => {
      const projectList = {projects: ['shight', ' more-shight']};
      const action = {
        type: 'request.projects.success',
        projects: projectList
      };
      expect(projects(undefined, action)).to.equal(projectList.projects);
    });

    it('should return an error when action type is "request.projects.success"', () => {
      const error = 'Failure!!';
      const action = {
        type: 'request.projects.failure',
        error
      };
      expect(projects(undefined, action)).to.equal(error);
    });
  });
});
