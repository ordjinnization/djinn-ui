/**
 *
 */
'use strict';

import React from 'react';
import {mount, shallow} from 'enzyme';
import HeatmapCard from './HeatmapCard';
import {expect} from 'chai';
import configureStore from 'redux-mock-store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const middleware = [];
const mockStore = configureStore(middleware);

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
  return shallow(<HeatmapCard {...props} />);
};

describe('Heatmap Card initialization', () => {
  it('should send a request for heatmap data', () => {
    const store = mockStore({heatmap: {}});
    mount(<MuiThemeProvider><HeatmapCard store={store} /></MuiThemeProvider>);
    expect(store.getActions()).to.deep.equal([{type: 'REQUEST_HEATMAP'}])
  });
});
