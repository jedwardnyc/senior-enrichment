import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudent } from '../store/students';

class CreateStudent extends Component {
  constructor(){
    super();
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev){
    ev.preventDefault();
    this.props.createStudent(this.state);
  }

  onDelete(ev,id){
    ev.preventDefault();
    this.props.deleteStudent(id);
  }

  render(){
    return (
      <div>
        <h1> Create New Student </h1>
        <form onSubmit={this.onSubmit} className='form-control from-group'>
            <label>Full Name: </label>
            <input 
              onChange={ev => this.setState({ fullName: ev.target.value })}
              className='form-control form-inline' />
            <br />
            <label>Avatar URL: </label>
            <input 
              onChange={ev => ev.target.value ? this.setState({ imageURL: ev.target.value }) : null}
              className='form-control' />
            <br />
            <label>Email: </label>
            <input 
              onChange={ev => this.setState({ email: ev.target.value })}
              className='form-control' />
            <br />
            <label>GPA: </label>
            <input 
              onChange={ev => this.setState({ gpa: ev.target.value })}
              className='form-control' />
            <br />
            <button className='btn btn-primary'>Save Changes</button>
          </form> 
      </div> 
    )
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    createStudent: (student) => dispatch(createStudent(student,history)) 
  }
}

export default connect(null, mapDispatchToProps)(CreateStudent);