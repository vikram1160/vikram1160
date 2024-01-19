import React from 'react'
import { Link } from 'react-router-dom';
import resume from '../assets/resume.docx'
import './Home.css'
import viki from '../assets/insta4.jpg'
import vik from '../assets/PNG21.jpg'
import vi from '../assets/youtube.png'


function Home() {

  let whatsapp_message = "https://wa.me/917887589262?text=I want to hire you"

  return (
    <div className='container-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center mb-5'>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <h1>Hello, I am <span className='text-danger display-2 fw-bold '>Vikram</span></h1>
          <p className='my-info ' >
            <h5>Front End Developer, And UI UX Designer</h5>
             I am professional web developer looking for the opportunity to express my knowledge.
          </p>
          <div>
            <a href={resume} className='btn btn-outline-danger mx-3 mb-3' download>Download Resume</a>

            <a href={whatsapp_message} className='btn btn-danger mb-3'>Connect on Whatsapp</a>

          </div>
          <div className="d-flex mb-5">
        <Link to="https://www.instagram.com/vikram_golait_96k?igsh=Z2ZwdDRyZWdvZjZx"><img src={viki} className=' insta'alt='insta'/></Link>
        <Link to="https://wa.me/917887589262?text=I want to hire you" ><img src={vik} className=' whatsapp' alt='whatsapp'/></Link>
        <Link to="https://youtube.com/@Status_Studiooo?si=j0t43nfqw4r93ioY"><img src={vi} className=' you' alt='youtube'/></Link>
        </div>
        </div>
    </div>
  )
}

export default Home
