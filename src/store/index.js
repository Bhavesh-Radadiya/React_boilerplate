/**
 *@description Redux Store configure
 */
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import createReducer from '../reducers';

function configureStore (initialState) {
  const router = routerMiddleware(browserHistory);
  const middlewares = [
    router
  ];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
		middlewares.push(logger);
  }

  const enhancers = [
    applyMiddleware(...middlewares),
  ];


  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers)
  );

  return store;
}

export default configureStore;
