import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StudentItem extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { student } = this.props;
    return (
      <div className='jumbotron' >
      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          <img src={student.imageURL} />
        </div>
        <div style={{flex: 1}}>
          <Link to={`/students/${student.id}`}>
            <h1> {student.fullName} </h1>
          </Link>
          <h3> {student.email} </h3>
          <h3> Campus: {student.campus.name ? student.campus.name : 'This student is not enrolled'} </h3>
        </div>
      </div>
      </div>
    );
  }
}


export default connect()(StudentItem);