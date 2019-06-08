import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
        <li><NavLink to="/faq" activeClassName="selected" >FAQs</NavLink></li>
        <li><NavLink to="/faq" activeStyle={{fontWeight: 'bold', color: 'red' }}>FAQs</NavLink></li>
      </ul>
    </nav>
  )
}

export default navbar;
