import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';

class Students extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div style={{display: 'flex'}}>
          <h1 style={{flex: 6 }}> All Students </h1>
          <Link to='/students/create' ><button style={{flex: 1 }} className='btn btn-primary'> Add Student </button></Link>
        </div>
        <br />
        <div style={{listStyleType: 'none'}}>
          { 
            this.props.students.map(student => {
              return ( 
                <StudentItem key={student.id} student={student}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => {
  return {
    students
  }
} 

export default connect(mapStateToProps)(Students);