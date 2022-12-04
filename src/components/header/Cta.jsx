import React from 'react'
import cv from "../../assets/cv.pdf"

function Cta() {
  return (
    <div className='cta'>
        <a href={cv} className='btn' download>Downlaod CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta