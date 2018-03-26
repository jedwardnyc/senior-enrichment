import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Students extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div style={{display: 'flex'}}>
          <h1 style={{flex: 6 }}> All Students </h1>
          <button style={{flex: 1 }} className='btn btn-primary'> Add Student </button>
        </div>
        <br />
        <div style={{listStyleType: 'none', display: 'flex', flexWrap: 'wrap'}}>
          { 
            this.props.students.map(student => {
              return ( 
                <div className='jumbotron' key={student.id}> 
                  <img src={student.imageURL} width='140' height='140'/>
                  <br />
                  <Link to={`/students/${student.id}`}> {student.fullName} </Link>
                  <br />
                  {student.campus}
                </div>
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