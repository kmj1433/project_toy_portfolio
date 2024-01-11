import React from 'react'
import './Footer.css'

import { SiGithub, SiNotion, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footerContents'>
          <div>
            <a className='sns' href='#'><SiGithub className='sns1' size='45' style={{marginRight: '45px'}} /></a>
            <a className='sns' href='#'><SiNotion className='sns2' size='45' style={{marginRight: '45px'}} /> </a> 
            <a className='sns' href='#'><SiInstagram className='sns3' size='45' /></a>
          </div>
  
          <a href='#'><div className='copyright'>• Copyright 2023 • MinJi Kim • All Rights Reserved •</div></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer