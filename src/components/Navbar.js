import React from 'react';
import './Navbar.css'; 

const NavBar = () => {  
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
        <li>
          <a href="#">Link 4</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;