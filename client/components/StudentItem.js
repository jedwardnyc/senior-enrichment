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
      <div  style={{width: '33%',  border: '1px solid'}} className='jumbotron'>
      <div>
        <div style={{textAlign:'center'}}>
          <img src={student.imageURL} />
        </div>
        <br />
        <div style={{textAlign: 'center'}}>
          <Link to={`/students/${student.id}`}>
            <h3> {student.fullName} </h3>
          </Link>
          <h6> Campus: {student.campus ? student.campus.name : 'This student is not enrolled'} </h6>
        </div>
      </div>
      </div>
    );
  }
}


export default connect()(StudentItem);