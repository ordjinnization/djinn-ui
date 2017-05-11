/**
 *
 */
'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import HomePage from './components/home/homepage';
import FailTable from './components/card/failurelist/failurelist.component';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='fail' component={FailTable} />
  </Route>
);
