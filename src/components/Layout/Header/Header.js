import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='headerContents'>
        <a className='logo' href='#'>MINJI KIM</a>

        <nav className='navigation'>
          <ul>
            <a href='#'><li>Home</li></a>
            <a href='#'><li>About</li></a>
            <a href='#'><li>Project</li></a>
            <a href='#'><li>Archiving</li></a>
            <a href='#'><li>Contact</li></a>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header