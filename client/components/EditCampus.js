import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampus, updateStudent } from '../store';
import StudentItem from './StudentItem';

class EditCampus extends Component{
  constructor(props){
    super(props);
    const student = {}
    this.state = Object.assign({}, this.props.campus, { student: {} });
    this.update = this.update.bind(this);
    this.transferStudent = this.transferStudent.bind(this);
  };

  update(ev){
    ev.preventDefault();
    this.props.updateCampus(this.state);
  };

  transferStudent(ev){
    ev.preventDefault();
    this.state.student.campusId = this.props.campus.id;
    this.setState({ stay: true })
    this.props.updateStudent(this.state.student);
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps.campus)
  }

  render(){
    if (!this.props.campus) return null
    const { campus, students, errors } = this.props;
    const { name, imageURL, description, addressLine1, addressLine2 } = this.state;
    const { student } = this.state;
    const studentArr = students.filter(student => student.campusId === campus.id);
    return (
      <div>
      <h1> Edit {campus ? campus.name : null}? </h1>
      <form onSubmit={this.update} className='form-control from-group'>
        <label> Campus Name: </label>
        <div>
          <input 
            value={name}
            onChange={ev => this.setState({ name: ev.target.value })} 
            className={`form-control ${errors.find(error => error.path === 'name') ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">
            Please enter a campus name.
          </div>
        </div>
        <br />
        <label> Image URL: </label>
        <div>
          <input  
            value={imageURL}
            onChange={ev => this.setState({ imageURL: ev.target.value })} 
            className='form-control'/>
        </div>
        <br />
        <label> Address Line 1: </label>
        <div>
          <input 
            value={addressLine1}
            onChange={ev => this.setState({ addressLine1: ev.target.value })}
            className={`form-control ${errors.find(error => error.path === 'addressLine1') ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">
            Please enter a street address.
          </div>
        </div>
        <br />
        <label> Address Line 2: </label>
        <div>
          <input 
            value={addressLine2}
            onChange={ev => this.setState({ addressLine2: ev.target.value })}
            className={`form-control ${errors.find(error => error.path === 'addressLine2') ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">
            Please enter a city, state and zipcode.
          </div>
        </div>
        <br />
        <label> Description: </label>
        <div>
          <textarea
            value={description}
            onChange={ev => this.setState({ description: ev.target.value })}
            className={`form-control ${errors.find(error => error.path === 'description') ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">
            Please enter a valid description.
          </div>
        </div>
        <br />
        <button className='btn btn-primary'>Save Changes</button>
      </form>
      <div>
        <h2> Transfer a student to this campus: </h2>
        <form onSubmit={this.transferStudent} className='form-inline'>
          <select className='form-control' onChange={(ev) => this.setState({ student: this.props.students.find(student => student.id === ev.target.value*1)})}>
            <option value='-1'> --- Select a Student --- </option>
            {
              students.map(student => <option key={student.id} value={student.id}> {student.fullName} </option> )
            }
          </select>
          <button className='btn btn-dark'> Transfer </button>
        </form>
      </div>
      <hr />
      <h2 style={{textAlign:'center'}}> Students on Campus: </h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', paddingBottom:'25px'}}>
      { 
        studentArr.length ? 
         studentArr.map(student => <StudentItem key={student.id} path={location.hash} student={student}/>) 
         : <div style={{paddingBottom: '120px'}}> There are no students currently enrolled at {campus.name} </div>
      }
    </div>
    </div>
    )
  };
};

const mapStateToProps = ({campuses, students, errors}, ownProps) => {
  const campus = campuses.find(campus => campus.id === ownProps.id*1 );
  return {
    campus,
    students,
    errors
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  const path = 'campuses';
  return {
    updateCampus: (campus) => dispatch(updateCampus(campus, history)),
    updateStudent: (student) => dispatch(updateStudent(student, history, path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);