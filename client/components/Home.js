import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div id='home' className='flex'>
      <h1 className='flex'> Welcome to MHI Academy </h1>
      <div id='homeInfo' className='flex'>
        <div className='flex'>
          <p> welcome to our campus </p>
        </div>
        <div className='flex'>
          <p> welcome to our campus </p>
          <img className='imageFlex' src='./public/images/stock_campus2.jpg'/>
        </div>
      </div>
      <div className='flex'>
        <Link to='/students'> <button> Click here for all students </button> </Link>
        <br/>
        <Link to='/campuses'> <button> Click here for all campuses </button> </Link>
      </div>
    </div>
  )
};

export default Home;