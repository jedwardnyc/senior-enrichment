import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, fetchCampuses } from '../store';
import Nav from './Nav';
import Home from './Home';
import Students from './Students';
import Student from './Student';
import EditStudent from './EditStudent';
import Campuses from './Campuses';
import Campus from './Campus';
import EditCampus from './EditCampus';

class App extends React.Component{

  componentDidMount(){
    this.props.fetchStudents();
    this.props.fetchCampuses();
  };

  render(){
    return (
      <Router>
        <div>
          <Nav /> 
          <Route path='/' exact component={ Home } />
          <Route path='/students' exact component={ Students } />
          <Route path='/students/:id' exact render={({match}) =>  <Student id={match.params.id} /> } />
          <Route path='/students/:id/edit' component={ EditStudent } />
          <Route path='/campuses' exact component={ Campuses } />
          <Route path='/campuses/:id' exact render={({match}) =>  <Campus id={match.params.id} /> } />
          <Route path='/campuses/:id/edit' render={({match}) =>  <EditCampus id={match.params.id} /> } />
        </div>
      </Router>
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    fetchCampuses: () => dispatch(fetchCampuses())
  };
};

export default connect(null, mapDispatchToProps)(App);



