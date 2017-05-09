/**
 *
 */
'use strict';
import React from 'react';
import {mount, shallow} from 'enzyme';
import DjinnCard from './djinncard.component';
import {expect} from 'chai';

const init = (data) => {
  return shallow(<DjinnCard>{data}</DjinnCard>);
};

describe('djinn card component', () => {
  it('should render the given children', () => {
    const wrapper = init(<div id='test'>Yes.</div>);
    expect(wrapper.find('#test')).to.have.length(1);
  });
});
