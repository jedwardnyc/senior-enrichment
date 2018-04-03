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

  update(ev){
    ev.preventDefault();
    console.log(this.state)
    this.props.updateStudent(this.state)
  };

  render(){
    const { student, campuses, deleteStudent } = this.props;
    console.log(student)
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
              <h2> {student.fullName} </h2>
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
          !student.campus ? 
          <div>
            <h3 style={{textAlign: 'center'}}> This student is not registered to a campus! </h3>
            <form onSubmit={this.update}>
              <h4 style={{textAlign: 'center'}}> Please add them to a Campus: </h4>
              <select onChange={ev => ev.target.value ? this.setState({ campusId: ev.target.value }) : null} style={{align: 'center'}}>
                <option value='-1'> --- Select a Campus --- </option> 
                {
                  campuses.map(campus => {
                    return <option key={campus.id} value={campus.id}> {campus.name} </option>
                  })
                }
              </select>
              <button style={{marginLeft: '10px'}} className='btn btn-dark btn-sm'> Add to Campus </button>
            </form>
          </div>
          :  
          <div> 
            <h3 style={{textAlign: 'center'}}> This student is registered to: </h3>
            <br />
            <div style={{display: 'flex', justifyContent:'space-between'}}>
              <div style={{width: '50%'}}>
                <CampusItem campus={student.campus} />
              </div>
              <div style={{paddingLeft: '25px', width:'40%'}}>
              <form onSubmit={this.update}>
                <h3> Select a Campus: </h3>
                <select onChange={ev => this.setState({ campusId: ev.target.value })}>
                  <option value='-1'> --- Select a Campus --- </option> 
                  {
                    campuses.map(campus => {
                      return <option key={campus.id} value={campus.id}> {campus.name} </option>
                    })
                  }
                </select>
                <button style={{marginLeft: '10px'}} className='btn btn-dark btn-sm'> Set Campus </button>
              </form>
              </div> 
            </div>
          </div>
        }
        </div>
      </div>
      )
    }
    return null
  }
}

const mapStateToProps = ({students, campuses}, ownProps) => {
  return {
    student: students.find(student => student.id === ownProps.id*1 ),
    campuses
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteStudent: (student) => dispatch(deleteStudent(student,history)),
    updateStudent: (student) => dispatch(updateStudent(student,history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)