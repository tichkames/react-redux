import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedInReducer from './isLoggedIn';

const allReducers = combineReducers({
  counter: counterReducer,
  isLoggedIn: isLoggedInReducer
})

export default allReducers;