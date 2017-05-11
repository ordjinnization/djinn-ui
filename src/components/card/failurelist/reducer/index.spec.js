/**
 * Reducer tests.
 */
'use strict';
import {expect} from 'chai';
import {latestFailures} from './';

describe('failtable card reducers', () => {
  describe('latestFailures', () => {
    it('should return data for success action', () => {
      const action = {
        type: 'request.failtable.latest.success',
        data: {
          'results': [
            {
              'status': 'FAILED',
              'success': true,
              'repository': 'test',
              'run_id': 28,
              'timestamp': 1488259444733,
              'error_type': null,
              'stage_failed': 'test-stage',
              'project': 'Test',
              'error_message': null,
              'id': 'test-test-test'
            }, {
              'status': 'SUCCESS',
              'success': true,
              'repository': 'test-manager',
              'run_id': 25,
              'timestamp': 1484336542555,
              'error_type': null,
              'stage_failed': null,
              'project': 'Test2',
              'error_message': null,
              'id': 'test-test'
            }
          ]
        },
      };
      expect(latestFailures([], action)).to.be.deep.equal({failures: [{
        appName: 'test',
        description: 'test-stage'
      }]});
    });
  })
});
