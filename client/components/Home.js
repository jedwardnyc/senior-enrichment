import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h1> Home </h1>
      <p> this is where all the home info will go! </p>
      <Link to='/students'> Click here for all students </Link>
      <br/>
      <Link to='/campuses'> Click here for all campuses </Link>
    </div>
  )
};

export default Home;