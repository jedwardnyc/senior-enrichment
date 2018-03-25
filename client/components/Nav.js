import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/students' className='nav-link'>Students</Link>
        </li>
        <li className='nav-item'>
          <Link to='/campuses' className='nav-link'>Campuses</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;