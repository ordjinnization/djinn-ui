/**
 * Specs for the Heatmap component.
 */
'use strict';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Heatmap from './heatmap';
import {expect} from 'chai';

const CUSTOM_DATA = {
  z: [[0, 10], [3, 4]],
  x: ['Build Artifact', null],
  y: ['UI', 'Titan'],
  hoverinfo: 'text',
  type: 'heatmap',
  colorscale: []
};

const init = (data) => {
  const props = {
    data
  };
  return shallow(<Heatmap {...props} />);
};

describe('heatmap component', () => {
  it('should render a single PlotlyComponent', () => {
    const wrapper = init(CUSTOM_DATA);
    // Find by display name.
    expect(wrapper.find('Plotly')).to.have.length(1);
  });

  describe('added metadata', () => {
    let data;
    beforeEach(() => {
      const wrapper = init(CUSTOM_DATA);
      const props = wrapper.find('Plotly').props();
      data = props.data[0];
    });

    it('should have type "heatmap"', () => {
      expect(data.type).to.equal('heatmap');
    });

    it('should have "hoverinfo" type "text"', () => {
      expect(data.hoverinfo).to.equal('text');
    });

  });

});

