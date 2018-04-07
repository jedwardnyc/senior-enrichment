import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CampusItem extends Component {

  constructor (props) {
    super(props);
  };

  render () {
    const { campus, studentArr } = this.props;
    const students = studentArr.filter(student => student.campusId === campus.id );
    return (
      <div id='campusItem'>
          <div className='imageFlex'>
            <img width='100%' src={campus.imageURL} />
          </div>
          <div id='campusInfo'>
          <Link to={`/campuses/${campus.id}`}>
            <h3 className='center'> {campus.name} </h3>
          </Link>
            { students ? 
              <h6 className='center'>{students.length} Enrolled Students</h6>
              : null 
            }
          </div>
      </div>
    )
  };
};


export default connect()(CampusItem);