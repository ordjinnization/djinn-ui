/**
 *
 */
'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import HomePage from './components/home/homepage';
import FailureListContainer from './components/card/failurelist/failurelist.container';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='fail' component={FailureListContainer} />
  </Route>
);
