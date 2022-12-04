import React from 'react'
import "./about.css"
import me from '../../assets/eem-about.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
function About() {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="about me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>0 Years</small>
            </article>

             <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clints</h5>
              <small>0 Years</small>
            </article>
            
             <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ completed </small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores pariatur omnis id veniam. Obcaecati odit voluptatum veniam? Deleniti dolor ratione laborum expedita consequuntur corporis ipsam officia fugit vitae adipisci.</p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About