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
    const { errors } = this.props;
    console.log(errors)
    return (
      <div>
        <h1> Create New Campus </h1>
        <form onSubmit={this.onSubmit} className='form-control from-group'>
            <label>Name: </label>
            <div>
              <input 
                onChange={ev => this.setState({ name: ev.target.value })}
                className={`form-control ${errors.find(error => error.path === 'name') ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">
                Please enter a name for the Campus.
              </div>
            </div>
            <br />
            <label>Picture of Campus (URLs only please): </label>
            <input 
              onChange={ev => ev.target.value ? this.setState({ imageURL: ev.target.value }) : null}
              className='form-control' />
            <br />
            <label>Description: </label>
            <div>
              <input 
                onChange={ev => this.setState({ description: ev.target.value })}
                className={`form-control ${errors.find(error => error.path === 'description') ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">
                Please enter a description.
              </div>
            </div>
            <br />
            <button className='btn btn-primary'>Save Changes</button>
          </form> 
      </div> 
    )
  };
};

const mapStateToProps = ({ errors }) => {
  return {
    errors
  };
};

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    createCampus: (campus) => dispatch(createCampus(campus, history))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateCampus);