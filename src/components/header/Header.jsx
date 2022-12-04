import React from 'react'
import './header.css'
import Cta from  "./Cta"
import HeaderSocials from './HeaderSocials'
import ME from "../../assets/meea.png"

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Yohanes Derese</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Cta/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="Yohanes Derese" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
    )
}

export default Header