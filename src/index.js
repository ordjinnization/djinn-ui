/**
 *
 */
'use strict';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import {push, routerMiddleware, routerReducer, syncHistoryWithStore} from 'react-router-redux';
import '../node_modules/toastr/build/toastr.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/materialIcons.css';
import './styles/styles.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import {heatmap, projects} from './reducers/index';
import routes from './routes';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    heatmap,
    projects,
    routing: routerReducer
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const history = syncHistoryWithStore(browserHistory, store);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
sagaMiddleware.run(rootSaga);
render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
