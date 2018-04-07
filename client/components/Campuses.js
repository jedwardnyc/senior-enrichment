import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusItem from './CampusItem';

class Campuses extends Component{
  constructor(props){
    super(props);
  };

  render(){
    const { campuses, students } = this.props;
    return (
      <div>
        <div className='campuses'>
          <h1 className='listTitle'> All Campuses </h1>
          <Link to='/campuses/create'><button className='btn btn-primary addButton'> Add Campus </button></Link>
        </div>
        <br />
        <div id='campusesList'>
          { 
            campuses.map(campus => {
              return ( 
               <CampusItem key={campus.id} studentArr={students} campus={campus} />
              )
            })
          }
        </div>
      </div>
    )
  };
};

const mapStateToProps = ({ campuses, students }) => {
  return {
    students,
    campuses
  };
};

export default connect(mapStateToProps)(Campuses);