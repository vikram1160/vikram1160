import React from 'react'
import './AboutMe.css'
import vikram from '../assets/vikram.jpg.jpg'


const AboutMe = () => {
  return (
    <>
   <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={vikram} class="d-block  " alt="img"/>
    </div>
    <div class="carousel-item">
      <img src={vikram}class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={vikram} class="d-block  " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default AboutMe
