import React from 'react'
import './AboutMe.css'
import vikram from '../assets/vikram.jpg.jpg'


const AboutMe = () => {
  return (
    <>
   <div className="">
      <img src={vikram} className="d-block  " alt="..."/>
      <div className='mx-5' >
    <h3 className='md'>*I Am  <span className='vikram'>Vikram</span></h3>
    <h5 className='sam'>*I Am From Maharashtra, Dist <span className='pm'>Sambhaji Nagar</span>,</h5>
    <h5>*Front End Developer, And UI UX Designer</h5>
    <h3><span className='class'>*Framework </span>Angular,
      React      <br/>
      <h3><span className='class1'>*Database </span>MySql</h3>
      <h3><span className='class2'>*Backend </span>Basic Java</h3>
      
    </h3>
    </div>
    </div>
    
        </>
  )
}

export default AboutMe
