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

export const createStudent = (student, history) => {
  return (dispatch) => {
    return axios.post('/api/students', student)
    .then(res => res.data)
    .then(student => dispatch({ type: CREATE_STUDENT, student }))
    .then((student) => history.push(`/students/${student.id}`))
    .catch(err => console.log(err))
  }
};

export const deleteStudent = (student, history) => {
  return (dispatch) => {
    return axios.delete(`/api/students/${student.id}`)
    .then(() => dispatch({ type: DELETE_STUDENT, student }))
    .then(() => history.push('/students'))
    .catch(err => console.log(err))
  }
};

export const updateStudent = (student, history) => {
  return (dispatch) => {
    return axios.put(`/api/students/${student.id}`, student)
    .then(res => res.data)
    .then(student => dispatch({ type: EDIT_STUDENT, student }))
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
      return state.filter(student => student.id !== action.student.id*1);
    case EDIT_STUDENT: 
      return state.map(student => student.id === action.student.id ? action.student : student)
    default:
      return state;
  }
};

export default studentReducer;
