import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Student = (props) => {
  const { student } = props;
  console.log(student)
  return (
    <div className='jumbotron' >
      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          <img src={student.imageURL} />
        </div>
        <div style={{flex: 1}}>
          <h1> {student.fullName} </h1>
          <h3> GPA: {student.gpa} </h3>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent:'flex-end'}}>
        <Link to={`/students/${student.id}/edit`}><button className='btn btn-success'>Edit</button></Link> &nbsp;
        <button className='btn btn-danger'>Delete</button>
      </div>
      <br />
      <br />
      <div style={{display: 'flex', justifyContent:'center'}}>
        {
          !student.campus ? 
          <h3> This student is not registered to a campus </h3>
          :  
          <div className='jumbotron' > 
            <h3> This student is registered to: </h3>
            <div>
              <img src={student.campus.imageURL} width='140' height='140'/> 
            </div>
            <div>
              <Link to={`/campuses/${student.campus.id}`}> {student.campus.name} </Link>
              <br />
              <Link to={`/campuses/${student.campus.id}/edit`}> edit </Link>
            </div>
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