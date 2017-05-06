/**
 *
 */
'use strict';

import 'babel-polyfill';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import {push, routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import '../node_modules/toastr/build/toastr.min.css';
import rootReducer from './reducers';
import routes from './routes';
import rootSaga from './sagas';
import './styles/materialIcons.css';
import './styles/styles.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer(),
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
