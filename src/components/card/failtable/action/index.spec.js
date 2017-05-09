/**
 *
 */
'use strict';
import {expect} from 'chai';
import {requestLatest, requestLatestSuccess, requestLatestFailure} from './';

describe('fail table actions', () => {
  describe('request latest', () => {
    it('should return action type for request action', () => {
      expect(requestLatest()).to.be.deep.equal({type: 'request.failtable.latest'});
    });
  });

  describe('request latest success', () => {
    it('should return action for success and data', () => {
      const expected = {
        type: 'request.failtable.latest.success',
        data: ['results']
      };
      expect(requestLatestSuccess(['results'])).to.be.deep.equal(expected);
    });
  });

  describe('request latest failure', () => {
    it('should return action for failure and error data', () => {
      const expected = {
        type: 'request.failtable.latest.failure',
        error: 'This is an error'
      };
      expect(requestLatestFailure('This is an error')).to.be.deep.equal(expected);
    });
  });
});
