import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudent } from '../store/students';

class EditStudent extends Component {
  constructor(props){
    super(props);
    this.state = this.props.student;
    this.update = this.update.bind(this);
  };

  componentWillReceiveProps(nextProps){
    this.setState(nextProps.student);
  };

  update(ev){
    ev.preventDefault();
    this.props.updateStudent(this.state);
  };

  render(){
    const { student } = this.props;
    const { fullName, imageURL, gpa, email, firstName, lastName } = this.state;
    if (!this.props.student) return null
    return (
      <div>
        <h1> Edit {student.fullName}? </h1>
        <form onSubmit={this.update} className='form-control from-group'>
          <label>Full Name: </label>
          <input 
            onChange={ev => {
              const names = ev.target.value.split(' ')
              this.setState({ fullName: ev.target.value, firstName: names[0], lastName: names[1] })
            }}
            className='form-control form-inline' 
            value={fullName} />
          <br />
          <label>Avatar URL: </label>
          <input 
            onChange={ev => ev.target.value ? this.setState({ imageURL: ev.target.value }) : null}
            className='form-control' 
            value={imageURL} />
          <br />
          <label>Email: </label>
          <input 
            onChange={ev => ev.target.value ? 
              this.setState({ email: ev.target.value }) 
            : this.setState({ email: `${firstName}.${lastName}@school.com`})
          }
            className='form-control' 
            value={email} />
          <br />
          <label>GPA: </label>
          <input 
            onChange={ev => this.setState({ gpa: ev.target.value })}
            className='form-control' 
            value={gpa} />
          <br />
          <button className='btn btn-primary'>Save Changes</button>
        </form> 
      </div>
    )
  };
};

const mapStateToProps = ({ students }, ownProps) => {
  return {
    student: students.find(student => student.id === ownProps.id*1 ),
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateStudent: (student) => dispatch(updateStudent(student, history))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditStudent);