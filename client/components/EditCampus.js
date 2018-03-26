import React from 'react';
import { connect } from 'react-redux';

const EditCampus = (props) => {
  console.log(props)
  const { campus } = props;
  return (
    <form className='form-control from-group'>
      <input className='form-control' value={campus.name}/>
      <input className='form-control' value={campus.imageURL}/>
      <input className='form-control' value={campus.description}/>
      <button>Save Changes</button>
    </form>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    campus: state.campuses.find(campus => campus.id === ownProps.id*1 )
  }
}

export default connect(mapStateToProps)(EditCampus)