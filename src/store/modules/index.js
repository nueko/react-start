import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counter } from './counter';

export const rootReducer = combineReducers({
  routing: routerReducer,
  counter
});
