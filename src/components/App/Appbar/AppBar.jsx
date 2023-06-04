import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import twitter from 'images/twitter.png';
import { AppBarCss } from './AppBar.styled';

const AppBar = () => {
  const location = useLocation();
  return (
    <AppBarCss className="header">
      <NavLink to="/">
        <img src={twitter} alt="logo" width={50} height={50} />
      </NavLink>
      <NavLink to="/tweets" state={{ from: location }}>
        Tweets
      </NavLink>
    </AppBarCss>
  );
}

export default AppBar