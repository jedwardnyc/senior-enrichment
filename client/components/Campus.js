import React from 'react';
import { connect } from 'react-redux';
import Students from './Students';
import { Link } from 'react-router-dom';
import { deleteCampus } from '../store';
import StudentItem from './StudentItem';

const Campus = (props) => {
  const { campus, students } = props;
  if (!campus) return null;
  //if time, look at this, it probs shouldn't be there
  const studentArr = students.filter(student => student.campusId === campus.id)
  return (
    <div>
      <div className='jumbotron' style={{display: 'flex'}}>
        <img style={{width:'50%'}} src={campus.imageURL} />
        <div style={{display: 'flex', width:'50%', flexDirection:'column', paddingLeft:'20px', textAlign:'center'}}>
          <div>
            <h1> {campus.name} </h1> 
            <p> {campus.description} </p>
            <h5> Located At: </h5>
            <h6> {campus.addressLine1} </h6>
            <h6> {campus.addressLine2} </h6>
          </div>
          <div style={{display:'flex', alignItems:'flex-end', justifyContent:'flex-end'}}>
            <Link to={`/campuses/${campus.id}/edit`}><button className='btn btn-success'>Edit</button></Link> &nbsp;
            <button onClick={() => props.deleteCampus(campus)} className='btn btn-danger'>Delete</button>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', marginBottom:'45px'}}>
        <h1 style={{flex: 6}}>Students on Campus</h1>
        <Link to={`/students/create`}><button style={{flex: 1 }} className='btn btn-primary'> Add Student </button></Link>
      </div>
      <br />
      <br />
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
        { 
          studentArr.length ? 
           studentArr.map(student => <StudentItem key={student.id} path={location.hash} student={student}/>) 
           : <div style={{paddingBottom: '120px'}}> There are no students currently enrolled at {campus.name} </div>
        }
      </div>
    </div>
  )
};

const mapStateToProps = ({ campuses, students }, ownProps) => {
  const campus = campuses.find(campus => campus.id === ownProps.id*1 )
  return {
    campus,
    students
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteCampus: (campus) => dispatch(deleteCampus(campus, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campus);