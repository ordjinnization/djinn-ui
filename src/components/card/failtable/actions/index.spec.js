/**
 *
 */
'use strict';
import {expect} from 'chai';
import {requestLatest, requestLatestSuccess} from './';

describe('fail table actions', () => {
  describe('request latest', () => {
    it('should return action type for "request.failtable.latest"', () => {
      expect(requestLatest()).to.be.deep.equal({type: 'request.failtable.latest'});
    });
  });

  describe('request latest success', () => {
    it('should return action for "request.failtable.latest.success" adn data', () => {
      const expected = {
        type: 'request.failtable.latest.success',
        latestResults: ['results']
      };
      expect(requestLatestSuccess(['results'])).to.be.deep.equal(expected);
    });
  });
});
