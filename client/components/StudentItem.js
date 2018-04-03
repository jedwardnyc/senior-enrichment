import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StudentItem extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { student, campus } = this.props;
    const path = location.hash;
    return (
      <div style={{width: '30%', display: 'flex', flexDirection:'column', alignItems:'center', paddingBottom:'15px'}}>
        <img style={{flex:'0 1 auto'}} width="50%" src={student.imageURL} />
        <br />
        <div>
          <Link style={{textAlign: 'center'}} to={`/students/${student.id}`}>
            <h4> {student.fullName} </h4>
          </Link>
          {
            path.includes('campuses') ? null : <h6> {campus ? `Campus: ${campus.name}` : 'This student is not enrolled'} </h6>
          }
        </div>
      </div>
    );
  }
}


export default connect()(StudentItem);