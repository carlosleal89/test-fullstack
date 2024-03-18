import React from 'react'
import '../styles/Header.css';
import logo from '../images/UOL.svg';

function Header() {
  return (
    <div className="header_container">
      <img src={ logo } alt="uol logo" id="header-uol-logo" />
    </div>
  )
}

export default Header