import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';

export const fetchStudents = () => {
  return (dispatch) => {
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch({ type: GET_STUDENTS, students}))
    .catch(err => console.log(err))
  }
};

export const fetchCampuses = () => {
  return (dispatch) => {
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses=> dispatch({ type: GET_CAMPUSES, campuses}))
    .catch(err => console.log(err))
  }
};

const studentReducer = (state = [], action) => {
  switch(action.type){
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

const campusReducer = (state = [], action) => {
  switch(action.type){
    case GET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

const reducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
