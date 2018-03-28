import React from 'react';
import { connect } from 'react-redux';

const EditCampus = (props) => {
  const { campus } = props;
  return (
    <div>
      <h1> Edit {campus.name}? </h1>
      <form className='form-control from-group'>
        <input className='form-control' value={campus.name}/>
        <input className='form-control' value={campus.imageURL}/>
        <input className='form-control' value={campus.description}/>
        <button className='btn btn-primary'>Save Changes</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    campus: state.campuses.find(campus => campus.id === ownProps.id*1 )
  }
}

export default connect(mapStateToProps)(EditCampus)