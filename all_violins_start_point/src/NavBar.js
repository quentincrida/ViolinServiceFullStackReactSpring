import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <img src="/images/pirtate-flag.jpg" alt="Logo"/>

      <ul>
        <li className="navLink">
          <a href="/violins">Violins</a>
        </li>
        <li className="navLink">
          <a href="/tuttis">Tuttis</a>
        </li>
        <li className="navLink">
          <a href="/symphonies" >Symphonies</a>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
