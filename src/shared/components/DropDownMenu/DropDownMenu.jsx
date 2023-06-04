import React from 'react'
import { DropDownMenuCss } from './DropDownMenu.styled'

const DropDownMenu = ({filterFollow, filterFollowing, filterAll}) => {
   
  return (
    <DropDownMenuCss>
      <div className="dropdown">
        <input type="checkbox" id="dropdown" />

        <label className="dropdown__face" htmlFor="dropdown">
          <div className="dropdown__text">Filter</div>

          <div className="dropdown__arrow"></div>
        </label>

        <ul className="dropdown__items">
          <li>
            <button
              className="dropdown-button"
              type="button"
              onClick={filterFollow}
            >
              Follow
            </button>
          </li>
          <li>
            <button
              className="dropdown-button"
              type="button"
              onClick={filterFollowing}
            >
              Following
            </button>
          </li>
          <li>
            <button
              className="dropdown-button"
              type="button"
              onClick={filterAll}
            >
              All
            </button>
          </li>
        </ul>
      </div>

      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </DropDownMenuCss>
  );
}

export default DropDownMenu