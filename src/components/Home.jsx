import React from 'react'
import { Link } from 'react-router-dom';
import resume from '../assets/resume.docx'
import './Home.css'

function Home() {

  let whatsapp_message = "https://wa.me/917887589262?text=I want to hire you"

  return (
    <div className='container-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center mb-5'>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          
        <div className="d-flex mt-Link">
        <Link to="https://www.instagram.com/vikram_golait_96k?igsh=Z2ZwdDRyZWdvZjZx"><i className="fa fa-instagram mb-2  insta" ></i></Link>
        <Link to="https://wa.me/917887589262?text=I want to hire you"><i class="fa fa-whatsapp mb-2 what"></i></Link>
        <Link to="https://youtube.com/@Status_Studiooo?si=j0t43nfqw4r93ioY"><i class="fa fa-youtube you"></i></Link>
        </div>

        <h1>Hello, I am <span className='text-danger display-2 fw-bold '>Vikram</span></h1>
          <p className='my-info ' >
            I am professional web developer looking for the opportunity to express my knowledge. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid velit dicta voluptatum rem blanditiis magnam voluptatibus vitae. Ipsum, dignissimos unde molestias at hic optio voluptatum beatae nihil, velit quaerat ratione. Quae sed neque fugiat ex!
          </p>
          <div>
            <a href={resume} className='btn btn-outline-danger mx-3 mb-3' download>Download Resume</a>

            <a href={whatsapp_message} className='btn btn-danger mb-3'>Connect on Whatsapp</a>

          </div>
        </div>
    </div>
  )
}

export default Home
