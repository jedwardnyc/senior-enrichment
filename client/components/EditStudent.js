import React from 'react';
import { connect } from 'react-redux';

const EditStudent = (props) => {
  console.log(props)
  const { student } = props
  return (
    <form>
      <input value={student.fullName} />
      <input value={student.imageURL} />
      <input value={student.gpa} />
      <button>Save Changes</button>
    </form>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.students.find(student => student.id === ownProps.id*1 )
  }
}

export default connect(mapStateToProps)(EditStudent)