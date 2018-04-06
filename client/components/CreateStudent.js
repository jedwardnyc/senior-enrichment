import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudent } from '../store/students';

class CreateStudent extends Component {
  constructor(){
    super();
    this.state = {
      fullName: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  };

  onSubmit(ev){
    ev.preventDefault();
    this.props.createStudent(this.state);
  };
  
  render(){
    const names = this.state.fullName.split(' ');
    const { campuses } = this.props;
    return (
      <div>
        <h1> Create New Student </h1>
        <form onSubmit={this.onSubmit} className='form-control from-group'>
          <label>Full Name: </label>
          <input 
            onChange={ev => this.setState({ fullName: ev.target.value, firstName: names[0], lastName: names[1] })}
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
          <select onChange={ev => this.setState({ campusId: ev.target.value*1 })} style={{align: 'center'}}>
            <option value='-1'> --- Select a Campus --- </option> 
            {
              campuses.map(campus => {
                return <option key={campus.id} value={campus.id}> {campus.name} </option>
              })
            }
          </select>
          <br />
          <br />
          <button className='btn btn-primary'>Save Changes</button>
        </form> 
      </div> 
    )
  };
};

const mapStateToProps = ({ campuses }) => {
  return {
    campuses
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createStudent: (student) => dispatch(createStudent(student,history)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent);