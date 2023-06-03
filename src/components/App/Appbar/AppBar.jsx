import React from 'react'
import { NavLink } from 'react-router-dom'

import twitter from 'images/twitter.png';

const AppBar = () => {
  return (
    <header className="header">
          <NavLink to='/'>
              <img src={twitter} alt="logo" />
      </NavLink>
      <NavLink to='/tweets'>Tweets</NavLink>
    </header>
  );
}

export default AppBar