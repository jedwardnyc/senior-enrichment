import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';

const Students = (props) => {
    const { students } = props;
    return (
      <div>
        <div className='flex'>
          <h1 className='listTitle'> All Students </h1>
          <Link to='/students/create' ><button className='btn btn-primary addButton'> Add Student </button></Link>
        </div>
        <br />
        {
          students.length ?
          <div id='studentsList'>
            { 
              students.map(student => {
                return ( 
                  <StudentItem key={student.id} student={student}/>
                )
              })
            }
          </div>
        :
          <div className='center'>
            <h2> There are no Students in the database </h2>
          </div>
        }
      </div>
    )
};

const mapStateToProps = ({ students }) => {
  return {
    students
  };
};

export default connect(mapStateToProps)(Students);