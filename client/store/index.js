import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import students from './students';
import campuses from './campuses'; 
import errors from './errors';

const reducer = combineReducers({
  students,
  campuses,
  errors
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;

export * from './students';
export * from './campuses';
export * from './errors';
