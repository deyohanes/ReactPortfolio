import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
        <section id="services">
          <h5>what i offer</h5>
          <h5>Services</h5>

          <div className="container services_container">
            <article className='service'>
              <div className="service_head">
                <h3>UI/UX Design</h3>
              </div>

              <ul className='service_list'>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
              </ul>
            </article>


            <article className='service'>
              <div className="service_head">
                <h3>Web Development</h3>
              </div>

              <ul className='service_list'>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
              </ul>
            </article>

            <article className='service'>
              <div className="service_head">
                <h3>Content creaction</h3>
              </div>

              <ul className='service_list'>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon'/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis!</p>
                </li>
              </ul>
            </article>
          </div>
        </section>  )
}

export default Services