import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <img src="/images/orchestra-2098877_640.jpg" alt="Logo"/>

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
