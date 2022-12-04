import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';
function Experience() {
  return (
<section id="experience">
  <h5>Skills I have</h5>
  <h2>My Experience's</h2>

  <div className="container experience_container">
    <div className="experience_frontend">
      <h3>FrontEnd Development</h3>
      <div className="experience_content">
        <article className="experience_detail">
        <BsPatchCheckFill />

        <div> <h4>HTML</h4> 
        <small className='t ext-light'>Experienced</small></div>
      </article>
        <article className= "experience_detail">
        <BsPatchCheckFill/> 

      <div>  <h4>CSS</h4> 
        <small className='t ext-light'>Intermidate</small></div>
      </article>
        <article className= "experience_detail">
        <BsPatchCheckFill/> 

        <div>  <h4>JavaScri pt</h4>
          <small className= 'text-light'>Experienced</small></div>
        </article>
         <article className ="experience_detail">
          <BsPatchCheckFill />

         <div> <h4>Bootstra p</h4>
          <small className= 'text-light'>Experienced</small></div>
        </article>
         <article className ="experience_detail">
          <BsPatchCheckFill />

        <div>  <h4>Tailwind </h4>
          <small className= 'text-light'>Experienced</small></div>
        </article>
         <article className ="experience_detail">
          <BsPatchCheckFill />

         <div> <h4>React</h4>
          <small className='text-light'>Experienced</small></div>
        </article>
      </div>
    </div>

    <div className="experience_backend">
        <h3>BackEnd Development</h3>
      <div className="experience_content">
        <article className="experience_detail">
          <BsPatchCheckFill/>

          <div><h4>Node JS</h4>
          <small className='text-light'>Experienced</small></div>
        </article>
         <article className="experience_detail">
          <BsPatchCheckFill/>

        <div>  <h4>MongoDB</h4>
          <small className='text-light'>Intermidate</small></div>
        </article>
         <article className="experience_detail">
          <BsPatchCheckFill/>

        <div>  <h4>php</h4>
          <small className='text-light'>Experienced</small></div>
        </article>
         <article className="experience_detail">
          <BsPatchCheckFill/>

          <div><h4>Mysql</h4>
          <small className='text-light'>Intermidate</small></div>
        </article>
         <article className="experience_detail">
          <BsPatchCheckFill/>
          
          <div><h4>Django</h4>
          <small className='text-light'>Intermidate</small></div>
        </article>
         
      </div>
    </div>
  </div>
</section>  )
}

export default Experience