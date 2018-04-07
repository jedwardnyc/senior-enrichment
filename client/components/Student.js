import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusItem from './CampusItem';
import { deleteStudent, updateStudent } from '../store/students';

class Student extends Component {
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
    const { student, students, campuses, campus, deleteStudent, id } = this.props;
    if (student) {
      return (
        <div>
          <div className='jumbotron' >
            <div style={{display: 'flex'}}>
              <div style={{width:'50%'}}>
                <img src={student.imageURL} />
              </div>
              <div>
                <div style={{width:'50%'}}>
                  <h3> {student.fullName} </h3>
                  <h3> {student.email} </h3>
                  <h3> GPA: {student.gpa} </h3>
                </div>
                <div style={{justifyContent:'flex-end'}}>
                  <Link to={`/students/${student.id}/edit`}><button className='btn btn-success'>Edit</button></Link> &nbsp;
                  <button onClick={() => deleteStudent(student)} className='btn btn-danger'>Delete</button>
                </div>
              </div>
            <br />
            <br />
            </div>
        </div>
        <div>
        {
          student && campus ? 
          <div>
            <h4 style={{textAlign: 'center'}}> This student is registered to: </h4>
            <CampusItem campus={campus} studentArr={students}/>
          </div>  :
          <div>
            <h3 style={{textAlign: 'center'}}> This student is not registered to a campus! </h3>
            <h4 style={{textAlign: 'center'}}> Please add them to a Campus: </h4> 
          </div>
        }
          <form style={{textAlign: 'center'}} onSubmit={this.update}>
            <select onChange={ev => this.setState({ campusId: ev.target.value*1 })} style={{align: 'center'}}>
              <option value='null'> --- Unenrolled --- </option> 
              {
                campuses.map(campus => {
                  return <option selected={ campus.id === student.campusId } key={campus.id} value={campus.id}> {campus.name} </option>
                })
              }
            </select>
            <button style={{marginLeft: '10px'}} className='btn btn-dark btn-sm'> {campus ? 'Change Campus' : 'Add to Campus'} </button>
          </form>
        </div>
      </div>
      )
    };
    return null
  };
};


const mapStateToProps = ({students, campuses}, {id}) => {
  const student = students.find(student => student.id === id*1)
  const campus = student ? campuses.find(campus => campus.id === student.campusId) : null
  return {
    students,
    student,
    campuses,
    campus
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteStudent: (student) => dispatch(deleteStudent(student,history)),
    updateStudent: (student) => dispatch(updateStudent(student,history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);