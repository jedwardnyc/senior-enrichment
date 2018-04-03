import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampus } from '../store/campuses';

class EditCampus extends Component{
  constructor(props){
    super(props);
    this.state = this.props.campus
    this.update = this.update.bind(this);
  };

  update(ev){
    ev.preventDefault();
    this.props.updateCampus(this.state);
  };

  render(){
    console.log(this.props)
    const { campus } = this.props;
    const { name, imageURL, description } = this.state
    return (
      <div>
        <h1> Edit {campus.name}? </h1>
        <form onSubmit={this.update} className='form-control from-group'>
          <label> Campus Name: </label>
          <input 
            className='form-control' 
            value={name}
            onChange={ev => this.setState({ name: ev.target.value })} />
          <br />
          <label> Image URL: </label>
          <input 
            className='form-control' 
            value={imageURL}
            onChange={ev => this.setState({ imageURL: ev.target.value })} />
          <br />
          <label>Description: </label>
          <input 
            className='form-control' 
            value={description}
            onChange={ev => this.setState({ description: ev.target.value })}  />
          <br />
          <button className='btn btn-primary'>Save Changes</button>
        </form>
      </div>
    )
  };
};

const mapStateToProps = ({campuses}, ownProps) => {
  return {
    campus: campuses.find(campus => campus.id === ownProps.id*1 )
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateCampus: (campus) => dispatch(updateCampus(campus, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus)