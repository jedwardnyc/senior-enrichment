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
          <Link to='/campuses/x/create'><button style={{flex: 1 }} className='btn btn-primary'> Add Campus </button></Link>
        </div>
        <br />
        <div style={{listStyleType: 'none', display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
          { 
            this.props.campuses.map(campus => {
              return ( 
                <div className='jumbotron' style={{ display:'flex', flexBasis: '49%' }}key={campus.id}>
                  <div style={{flex: 1}}> 
                    <img src={campus.imageURL} width='140' height='140'/>
                  </div>
                  <br />
                  <div style={{flex: 3, justifyContent:'center'}}>
                    <Link to={`/campuses/${campus.id}`}> {campus.name} </Link>
                    <br /> 
                    <div style={{display: 'flex', alignItems:'flex-end'}}>
                      <Link to={`/campuses/${campus.id}/edit`}><button className='btn btn-sm btn-success'> Edit </button></Link>
                      <button className='btn btn-sm btn-danger'> Delete </button>
                    </div>
                  </div>
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