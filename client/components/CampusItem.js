import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CampusItem extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { campus } = this.props;
    return (
      <div style={{display: 'flex', width:'45%', paddingBottom:'50px'}}>
          <div style={{width: '50%'}}>
            <img width='100%' src={campus.imageURL} />
          </div>
          <div style={{display: 'flex', flexDirection:'column', width: '50%', justifyContent: 'center'}}>
          <Link to={`/campuses/${campus.id}`}>
            <h3 style={{textAlign: 'center'}}> {campus.name} </h3>
          </Link>
            { campus.students ? 
              <h6 style={{textAlign: 'center'}}>{campus.students.length} Enrolled Students</h6>
              : null 
            }
          </div>
      </div>
    );
  }
}


export default connect()(CampusItem);