/**
 *@description Root reducer which combine other reducers
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const applicationReducers = {
  routing: routerReducer
};

export default function createReducer () {
  return combineReducers(applicationReducers);
}
