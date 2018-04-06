import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCampus } from '../store';

class CreateCampus extends Component {

  constructor(){
    super();
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  };

  onSubmit(ev){
    ev.preventDefault();
    this.props.createCampus(this.state);
  };

  render(){
    return (
      <div>
        <h1> Create New Campus </h1>
        <form onSubmit={this.onSubmit} className='form-control from-group'>
            <label>Name: </label>
            <input 
              onChange={ev => this.setState({ name: ev.target.value })}
              className='form-control form-inline' />
            <br />
            <label>Picture of Campus (URLs only please): </label>
            <input 
              onChange={ev => ev.target.value ? this.setState({ imageURL: ev.target.value }) : null}
              className='form-control' />
            <br />
            <label>Description: </label>
            <input 
              onChange={ev => this.setState({ description: ev.target.value })}
              className='form-control' />
            <br />
            <button className='btn btn-primary'>Save Changes</button>
          </form> 
      </div> 
    )
  };
};

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    createCampus: (campus) => dispatch(createCampus(campus, history))
  };
};

export default connect(null,mapDispatchToProps)(CreateCampus);