import React from 'react';
import { connect } from 'react-redux';

const EditStudent = (props) => {
  const { student } = props
  return (
    <div>
      <h1> Edit {student.fullName}? </h1>
      <form className='form-control from-group'>
        <input 
          onChange={evt => this.setState({ name: evt.target.value })}
          className='form-control' 
          value={student.fullName} />
        <input 
          onChange={evt => this.setState({ imageURL: evt.target.value })}
          className='form-control' 
          value={student.imageURL} />
        <input 
          onChange={evt => this.setState({ gpa: evt.target.value })}
          className='form-control' 
          value={student.gpa} />
        <button className='btn btn-primary'>Save Changes</button>
      </form> 
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.students.find(student => student.id === ownProps.id*1 ),
  }
}

export default connect(mapStateToProps)(EditStudent)