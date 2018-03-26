import React from 'react';
import { connect } from 'react-redux';

const Student = (props) => {
  const { student } = props;
  return (
    <h1> {student.fullName} </h1>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.students.find(student => student.id === ownProps.id*1 )
  }
}

export default connect(mapStateToProps)(Student)