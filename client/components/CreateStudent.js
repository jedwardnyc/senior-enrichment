import React from 'react';
import { connect } from 'react-redux';

const CreateStudent = (props) => {
  return (
    <div>
      <h1> Create New Student </h1>
      <form className='form-control from-group'>
        <input className='form-control'  />
        <input className='form-control'  />
        <input className='form-control'  />
        <button className='btn btn-primary'>Create Student</button>
      </form>
    </div> 
  )
}

export default connect()(CreateStudent);