/**
 *
 */
'use strict';
import {expect} from 'chai';
import {requestLatest} from './';

describe('fail table actions', () => {
  describe('request latest', () => {
    it('should return action type for request latest', () => {
      expect(requestLatest()).to.be.deep.equal({type: 'request.failtable.latest'});
    });
  });
});
