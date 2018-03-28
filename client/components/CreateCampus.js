import React from 'react';
import { connect } from 'react-redux';

const CreateCampus = (props) => {
  return (
    <div>
      <h1> Create New Campus </h1>
      <form className='form-control from-group'>
        <input className='form-control'  />
        <input className='form-control'  />
        <input className='form-control'  />
        <button className='btn btn-primary'>Create Campus</button>
      </form>
    </div> 
  )
}

export default connect()(CreateCampus);