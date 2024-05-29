import React from 'react';
import './navbar.css'; 
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className="navbar-title">
        GAME HUB
        &nbsp;&nbsp;
        <img src="logo.png" alt="Logo" className="navbar-logo" />
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Articles">Articles</Link>
          </li>
          <li>
            <Link to="/Services">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

