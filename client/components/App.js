import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, fetchCampuses } from '../store';
import Students from './Students';
import Nav from './Nav';
import Campuses from './Campuses';
import Home from './Home';

class App extends React.Component{

  componentDidMount(){
    this.props.fetchStudents();
    this.props.fetchCampuses();
  }

  render(){
    return (
      <Router>
        <div>
          <Nav /> 
          <Route path='/' exact component={ Home } />
          <Route path='/students' exact component={ Students } />
          <Route path='/campuses' exact component={ Campuses } />
        </div>
      </Router>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    fetchCampuses: () => dispatch(fetchCampuses())
  }
}

export default connect(null, mapDispatchToProps)(App)



