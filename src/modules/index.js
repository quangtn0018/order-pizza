import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authenticate from './authenticate';
import pizza from './pizza';

export default combineReducers({
  router: routerReducer,
  pizza,
  authenticate
});
