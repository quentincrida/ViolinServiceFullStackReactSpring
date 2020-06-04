import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <img src="/images/orchestra-2098877_640.jpg" alt="Logo"/>

      <ul>
        <li className="navLink">
          <a href="/musicians">Musicians</a>
        </li>
        <li className="navLink">
          <a href="/musicians/new">Create Musician</a>
        </li>
        <li className="navLink">
          <a href="/tuttis">Sections</a>
        </li>
        <li className="navLink">
          <a href="/tuttis/new">Create Section</a>
        </li>
        <li className="navLink">
          <a href="/symphonies" >Symphonies</a>
        </li>
        <li className="navLink">
          <a href="/symphonies/new">Add Symphony</a>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
