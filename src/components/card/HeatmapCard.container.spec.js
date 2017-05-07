/**
 *
 */
'use strict';

import React from 'react';
import {mount, shallow} from 'enzyme';
import HeatmapCardContainer from './HeatmapCard.container';
import {expect} from 'chai';
import configureStore from 'redux-mock-store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const middleware = [];
const mockStore = configureStore(middleware);

describe('Heatmap Card initialization', () => {
  it('should send a request for heatmap data', () => {
    const store = mockStore({heatmap: {}, projects: []});
    mount(<MuiThemeProvider><HeatmapCardContainer store={store} /></MuiThemeProvider>);
    expect(store.getActions()).to.contain({type: 'request.heatmap'});
    expect(store.getActions()).to.contain({type: 'request.projects'});
  });
});
