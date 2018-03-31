import axios from 'axios';
import { GET_STUDENTS, CREATE_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from './constants';

export const fetchStudents = () => {
  return (dispatch) => {
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch({ type: GET_STUDENTS, students}))
    .catch(err => console.log(err))
  }
};

export const createStudent = (student) => {
  return (dispatch) => {
    return axios.post('/api/students', student)
    .then(res => res.data)
    .then(student => {
      console.log(student)
      dispatch({ type: CREATE_STUDENT, student })
    })
    .catch(err => console.log(err))
  }
};

export const deleteStudent = (student, history) => {
  return (dispatch) => {
    return axios.delete(`/api/students/${student.id}`)
    .then(student => { 
      console.log(student)
      dispatch({ type: DELETE_STUDENT, student })
    })
    .then(() => history.push('/students'))
    .catch(err => console.log(err))
  }
};

const studentReducer = (state = [], action) => {
  switch(action.type){
    case GET_STUDENTS:
      return action.students;
    case CREATE_STUDENT: 
      return [...state, action.student];
    case DELETE_STUDENT: 
      return state.filter(_student => _student.id !== action.student.id*1);
    default:
      return state;
  }
};

export default studentReducer;
