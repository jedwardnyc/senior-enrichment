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
      <div className='jumbotron' >
      <div>
        <div>
          <img src={campus.imageURL} />
        </div>
        <br />
        <div>
        <Link to={`/campuses/${campus.id}`}>
          <h1 style={{textAlign: 'center'}}> {campus.name} </h1>
        </Link>
        </div>
      </div>
      </div>
    );
  }
}


export default connect()(CampusItem);