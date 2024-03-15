import React from 'react'
import '../styles/Header.css';
import uolLogo from '../images/uol-universo-on-line.svg';

function Header() {
  return (
    <div className="header_container">
      <img src={ uolLogo } alt="uol logo" id="header-uol-logo" />
    </div>
  )
}

export default Header