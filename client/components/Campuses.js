import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Campuses extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div style={{display: 'flex'}}>
          <h1 style={{flex: 6 }}> All Campuses </h1>
          <button style={{flex: 1 }} className='btn btn-primary'> Add Campus </button>
        </div>
        <br />
        <div style={{listStyleType: 'none', display: 'flex', flexWrap: 'wrap'}}>
          { 
            this.props.campuses.map(campus => {
              console.log(campus)
              return ( 
                <div className='jumbotron' key={campus.id}> 
                  <img src={campus.imageURL} width='140' height='140'/>
                  <br />
                  <Link to={`/campuses/${campus.id}`}> {campus.name} </Link>
                  <br />
                  <Link to={`/campuses/${campus.id}/edit`}> edit </Link>
                  <br />
                  <button className='btn btn-sm btn-danger'> Delete </button> 
                </div>
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