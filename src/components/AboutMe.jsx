import React from 'react'
import './AboutMe.css'
import vikram from '../assets/vikram.jpg.jpg'


const AboutMe = () => {
  return (
    <>
   <div className="d-flex">
      <img src={vikram} className="d-block  " alt="..."/>
      <div className='mx-5' >
    <h3 className='md'>  I  Am  <span className='vikram'>Vikram</span></h3>
    <h5 className='sam'>I Am From Maharashtra, Dist <span className='pm'>Sambhaji Nagar</span>,</h5>
    </div>
    </div>
    
        </>
  )
}

export default AboutMe
