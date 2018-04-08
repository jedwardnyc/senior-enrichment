import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div id='home'>
      <div id='homeHeader'>
        <h2 className='homeText'> Margaret Hamilton</h2>
        <h3 className='homeSubtext'>Interplanetary Academy of Javascript </h3>
        <div id='homeInfo' className='flex center'>
          <h4> "The school of the future!" - Some Scientist Once </h4>
      </div>
      <br />
        <div id='homeButtons'>
          <Link to='/students'> <button className='btn btn-dark'> CLICK HERE FOR ALL STUDENTS </button> </Link>
          &nbsp;
          <Link to='/campuses'> <button className='btn btn-dark'> CLICK HERE FOR ALL CAMPUSES </button> </Link>
        </div>
      </div>
    </div>
  )
};

export default Home;