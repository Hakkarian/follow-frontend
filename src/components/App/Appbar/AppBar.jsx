import React from 'react'
import { NavLink } from 'react-router-dom'

import twitter from 'images/twitter.png';
import { AppBarCss } from './AppBar.styled';

const AppBar = () => {
  return (
    <AppBarCss className="header">
          <NavLink to='/'>
              <img src={twitter} alt="logo" width={50} height={50} />
      </NavLink>
      <NavLink to='/tweets'>Tweets</NavLink>
    </AppBarCss>
  );
}

export default AppBar