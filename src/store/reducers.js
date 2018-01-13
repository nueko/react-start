import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const files = require.context('./modules/', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  const name = key.replace(/(\.\/|\.js)/g, '');
  modules[name] = files(key).default || files(key);
});

export default combineReducers({
  routing: routerReducer,
  ...modules
});
