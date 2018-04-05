import React from 'react';
import { connect } from 'react-redux';
import Students from './Students';
import { Link } from 'react-router-dom';
import { deleteCampus } from '../store';
import StudentItem from './StudentItem';

const Campus = (props) => {
  const { campus } = props
  if (!campus) return null
  return (
    <div>
      <div className='jumbotron' style={{display: 'flex'}}>
        <img style={{width:'50%'}} src={campus.imageURL} />
        <div style={{display: 'flex', width:'50%', flexDirection:'column', paddingLeft:'20px', textAlign:'center'}}>
          <div>
            <h1> {campus.name} </h1> 
            <p> {campus.description} </p>
          </div>
          <div style={{display:'flex', alignItems:'flex-end', justifyContent:'flex-end'}}>
            <Link to={`/campuses/${campus.id}/edit`}><button className='btn btn-success'>Edit</button></Link> &nbsp;
            <button onClick={() => props.deleteCampus(campus)} className='btn btn-danger'>Delete</button>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', marginBottom:'45px'}}>
        <h1 style={{flex: 6}}>Students on Campus</h1>
        <button style={{flex: 1 }} className='btn btn-primary'> Add Student </button>
      </div>
      <br />
      <br />
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
        { 
          campus.students.length ? 
           campus.students.map(student => <StudentItem key={student.id} path={location.hash} student={student}/>) 
           : <div style={{paddingBottom: '120px'}}> There are no students currently enrolled at {campus.name} </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ campuses }, ownProps) => {
  return {
    campus: campuses.find(campus => campus.id === ownProps.id*1 )
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteCampus: (campus) => dispatch(deleteCampus(campus, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)