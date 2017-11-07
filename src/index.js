/**
 *@name App
 *@description Root component for the app which has routes for the app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import configureStore from './store';
import App from './components/app';
import Home from './components/home';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
/**
 *@description Render react app in dom
 */
ReactDOM.render(
  <Provider store = {store}>
    <Router history={history}>
      <Route path = "/" component = {App}>
    		<IndexRoute component = {Home} />
    	</Route>
    </Router>
  </Provider>,
  document.getElementById('app') || document.createElement('div')
);
