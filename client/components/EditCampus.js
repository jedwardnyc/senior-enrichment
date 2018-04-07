import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampus } from '../store';
import StudentItem from './StudentItem';

class EditCampus extends Component{
  constructor(props){
    super(props);
    this.state = {
      student: {},
      campus: this.props.campus
    };
    this.update = this.update.bind(this);
  };

  update(ev){
    ev.preventDefault();
    this.props.updateCampus(this.state);
  };

  transferStudent(ev){
    ev.preventDefault();
    const student = this.state.student;
    student.campusId = this.props.campus.id;
  }

  render(){
    const { campus, students } = this.props;
    const { name, imageURL, description } = this.state.campus;
    const { student } = this.state;
    const studentArr = students.filter(student => student.campusId === campus.id);
    return (
      <div>
        <h1> Edit {campus.name}? </h1>
        <form onSubmit={this.update} className='form-control from-group'>
          <label> Campus Name: </label>
          <input 
            className='form-control' 
            value={name}
            onChange={ev => this.setState({ name: ev.target.value })} />
          <br />
          <label> Image URL: </label>
          <input 
            className='form-control' 
            value={imageURL}
            onChange={ev => this.setState({ imageURL: ev.target.value })} />
          <br />
          <label>Description: </label>
          <textarea
            className='form-control' 
            value={description}
            onChange={ev => this.setState({ description: ev.target.value })}  />
          <br />
          <button className='btn btn-primary'>Save Changes</button>
        </form>
        <div>
          <h2> Transfer a student to this campus: </h2>
          <form className='form-inline'>
            <select className='form-control' onChange={(ev) => this.setState({ student: ev.target.value})}>
              <option value='-1'> --- Select a Student --- </option>
              {
                students.map(student => <option key={student.id} value={student.id}> {student.fullName} </option> )
              }
            </select>
            <button onClick={(ev) => this.transferStudent(ev)} className='btn btn-dark'> Transfer </button>
          </form>
        </div>
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

const mapStateToProps = ({campuses, students}, ownProps) => {
  const campus = campuses.find(campus => campus.id === ownProps.id*1 );
  return {
    campus,
    students
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateCampus: (campus) => dispatch(updateCampus(campus, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);