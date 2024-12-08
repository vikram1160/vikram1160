import React from 'react'
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf'
import './Home.css'
import viki from '../assets/insta4.jpg'
import vik from '../assets/PNG21.jpg'
import vi from '../assets/linking.png'
// import ome from'../assets/home.png'


function Home() {
  // const myStyle ={
  //   backgroundImage:`url(${ome})`, backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'210vh', 

  // };
  let whatsapp_message = "https://wa.me/917887589262?text=I want to hire you"

  return (
    <div className='gop'>
    <div className=' op container-fluid bg-dark text-light min-vh-100 d-flex   '>

        <div className=' ok d-flex flex-column justify-content-center align-items-center text-center'>
          
        <h1> <span className='row text-danger display-2 fw-bold '>Vikram Golait</span></h1>
          <p className='my-info ' >
            <h5>Frontend Developer , and UI UX Designer</h5>
             I am professional web developer looking for the opportunity to express my knowledge.
          </p>
          <div>
            <a href={resume} className='btn btn-outline-danger mx-3 mb-3' download>Download Resume</a>

            <a href={whatsapp_message} className='btn btn-danger mb-3'>Connect on Whatsapp</a>

          </div>
          <div className="d-flex mb-5">
        <Link to="https://www.instagram.com/vikram_golait_96k?igsh=Z2ZwdDRyZWdvZjZx"><img src={viki} className=' insta'alt='insta'/></Link>
        <Link to="https://wa.me/917887589262?text=I want to hire you" ><img src={vik} className=' whatsapp' alt='whatsapp'/></Link>
        <Link to="https://www.linkedin.com/in/vikram-golait-584ba92b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={vi} className=' you' alt='linkdin'/></Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Home
