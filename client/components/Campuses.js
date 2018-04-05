import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusItem from './CampusItem';

class Campuses extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div style={{display: 'flex', justifyContent:'center'}}>
          <h1 style={{flex: 6 }}> All Campuses </h1>
          <Link to='/campuses/create'><button style={{flex: 1 }} className='btn btn-primary'> Add Campus </button></Link>
        </div>
        <br />
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', paddingRight: '15px'}}>
          { 
            this.props.campuses.map(campus => {
              return ( 
               <CampusItem key={campus.id} campus={campus} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ campuses }) => {
  return {
    campuses
  }
} 

export default connect(mapStateToProps)(Campuses);