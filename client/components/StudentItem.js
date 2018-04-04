import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const StudentItem = (props) => {
    const { student, campus } = props;
    const path = location.hash;
    return (
      <div style={{width: '30%', display: 'flex', flexDirection:'column', alignItems:'center', paddingBottom:'15px'}}>
        <img width="50%" src={student.imageURL} />
        <br />
        <div style={{textAlign: 'center'}}>
          <Link style={{textAlign: 'center'}} to={`/students/${student.id}`}>
            <h4> {student.fullName} </h4>
          </Link>
          {
            path.includes('campuses') ? null : <h6> {campus ? campus.name : 'This student is not enrolled'} </h6>
          }
        </div>
      </div>
    );
}

const mapStateToProps = ({ campuses }, { student }) => {
  return {
    student,
    campus: campuses.find(campus => campus.id === student.campusId)
  }
} 

export default connect(mapStateToProps)(StudentItem);
