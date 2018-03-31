import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusItem from './CampusItem';
import { deleteStudent } from '../store/students';

const Student = (props) => {
  const { student } = props;
  console.log(student)
  if (student) {
    return (
      <div>
      <div className='jumbotron' >
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <img src={student.imageURL} />
          </div>
          <div style={{flex: 1}}>
            <h2> {student.fullName} </h2>
            <h3> {student.email} </h3>
            <h3> GPA: {student.gpa} </h3>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent:'flex-end'}}>
          <Link to={`/students/${student.id}/edit`}><button className='btn btn-success'>Edit</button></Link> &nbsp;
          <button onClick={() => props.deleteStudent(student)} className='btn btn-danger'>Delete</button>
        </div>
        <br />
        <br />
      
      </div>
      <div>
      {
        !student.campus ? 
        <h3 style={{textAlign: 'center'}}> This student is not registered to a campus </h3>
        :  
        <div> 
          <h3 style={{textAlign: 'center'}}> This student is registered to: </h3>
          <br />
          <CampusItem campus={student.campus} />
        </div>
      }
      </div>
    </div>
    )
  }
  return null
}

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.students.find(student => student.id === ownProps.id*1 )
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteStudent: (student) => dispatch(deleteStudent(student,history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)