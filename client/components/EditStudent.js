import React from 'react';
import { connect } from 'react-redux';

class EditStudent extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.student
  };

  onSave(ev){
    ev.preventDefault();

  }

  render(){
    const { student } = this.props
    const { fullName, imageURL, gpa, email } = this.state
    if (!this.props.student) return null
    return (
      <div>
        <h1> Edit {student.fullName}? </h1>
        <form className='form-control from-group'>
          <label>Full Name: </label>
          <input 
            onChange={ev => this.setState({ fullName: ev.target.value })}
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
            onChange={ev => this.setState({ email: ev.target.value })}
            className='form-control' 
            value={email} />
          <br />
          <label>GPA: </label>
          <input 
            onChange={ev => this.setState({ gpa: ev.target.value })}
            className='form-control' 
            value={gpa} />
          <button className='btn btn-primary'>Save Changes</button>
        </form> 
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.students.find(student => student.id === ownProps.id*1 ),
  }
}

export default connect(mapStateToProps)(EditStudent)