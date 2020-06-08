import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <img src="/images/orchestra-2098877_640.jpg" alt="Logo" className="logo"/>

      <ul>
        <li className="navLink">
          <a href="/musicians">Musicians</a>
        </li>
        <li className="navLink">
          <a href="/musicians/new">Add a Musician</a>
        </li>
        <li className="navLink">
          <a href="/tuttis">Sections</a>
        </li>
        <li className="navLink">
          <a href="/tuttis/new">Add a Section</a>
        </li>
        <li className="navLink">
          <a href="/symphonies" >Symphonies</a>
        </li>
        <li className="navLink">
          <a href="/symphonies/new">Add a Symphony</a>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
