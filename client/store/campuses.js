import axios from 'axios';
import { GET_CAMPUSES, CREATE_CAMPUS, EDIT_CAMPUS, DELETE_CAMPUS } from './constants';
import { errorHandler } from './errors';

export const fetchCampuses = () => {
  return (dispatch) => {
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses=> dispatch({ type: GET_CAMPUSES, campuses }))
    .catch(err => errorHandler(err))
  }
};

export const createCampus = (campus, history) => {
  return (dispatch) => {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(campus => {
        history.push(`/campuses/${campus.id}`)
        dispatch({ type: CREATE_CAMPUS, campus })
      })
      .catch(err => dispatch(errorHandler(err)))
  }
}

export const deleteCampus = (campus, history) => {
  return (dispatch) => {
    return axios.delete(`/api/campuses/${campus.id}`)
      .then(() => {
        dispatch({ type: DELETE_CAMPUS, campus })
        history.push('/campuses')
      })
      .catch(err => errorHandler(err))
  }
}

export const updateCampus = (campus, history) => {
  return (dispatch) => {
    return axios.put(`/api/campuses/${campus.id}`, campus)
      .then(res => res.data)
      .then(campus => {
        dispatch({ type: EDIT_CAMPUS, campus })
        history.push(`/campuses/${campus.id}`)
      })
      .catch(err => errorHandler(err))
  }
}

const campusReducer = (state = [], action) => {
  switch(action.type){
    case GET_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...state, action.campus]
    case DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.campus.id*1)
    case EDIT_CAMPUS:
      return state.map(campus => campus.id === action.campus.id*1 ? action.campus : campus)
    default:
      return state;
  }
};

export default campusReducer;