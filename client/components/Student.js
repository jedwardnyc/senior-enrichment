import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusItem from './CampusItem';

const Student = (props) => {
  const { student } = props;
  console.log(student)
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
        <button className='btn btn-danger'>Delete</button>
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

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.students.find(student => student.id === ownProps.id*1 )
  }
}

export default connect(mapStateToProps)(Student)