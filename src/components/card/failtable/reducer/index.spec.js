/**
 * Reducer tests.
 */
'use strict';
import {latestFailures} from './';
import {expect} from 'chai';

describe('failtable card reducers', () => {
  describe('latestFailures', () => {
    it('should return data for success action', () => {
      const action = {
        type: 'request.failtable.latest.success',
        data: 'I am data!'
      };
      expect(latestFailures([], action)).to.be.deep.equal({failures: 'I am data!'});
    });
  })
});
