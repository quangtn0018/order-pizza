import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import pizza from './pizza';

export default combineReducers({
  router: routerReducer,
  pizza,
  counter
});
