import React from 'react';
import { connect } from 'react-redux';
import Students from './Students';
import { Link } from 'react-router-dom';

const Campus = (props) => {
  const { campus } = props
  return (
    <div>
      <div className='jumbotron' style={{display: 'flex'}}>
        <img style={{flex: '50%'}} src={campus.imageURL} />
        <div style={{flex: '50%', textAlign: 'center'}}>
          <h1> {campus.name} </h1> 
          <p> {campus.description} </p>
        </div>
      </div>
      <div style={{display: 'flex'}}>
        <h1 style={{flex: 6}}>Students on Campus</h1>
        <button style={{flex: 1 }} className='btn btn-primary'> Add Student </button>
      </div>
      <br />
      <br />
      <div style={{listStyleType: 'none', display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
        { 
          campus.students.length ? 
           campus.students.map(student => {
            console.log(student)
            return ( 
              <div className='jumbotron' key={student.id}> 
                <img src={student.imageURL} width='140' height='140'/>
                <br />
                <Link to={`/students/${student.id}`}> {student.fullName} </Link>
                <br />
                {student.campus}
              </div> 
            ) 
          }) : <div> There are no students currently enrolled at {campus.name} </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    campus: state.campuses.find(campus => campus.id === ownProps.id*1 )
  }
}

export default connect(mapStateToProps)(Campus)