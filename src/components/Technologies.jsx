import React from 'react'
import './Technologies.css'

function Technologies() {
  return (
    <div className="body">
      <div className="skills">
      <div className="skill">
        <div className="skill-name"><span style={{color :'Orange'}}>HTML</span></div>
        <div className="skill-bar">
          <div className="skill-per" per='93%' style={{ maxWidth: '93%' }}></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-name"><span style={{color :'Orange'}}>CSS</span></div>
        <div className="skill-bar">
          <div className="skill-per" per="70%" style={{ maxWidth: '86%' }}></div>
        </div>
      </div>

      <div className="skill">
        <div className="skill-name"><span style={{color :'Orange'}}>JAVASCRIPT</span></div>
        <div className="skill-bar">
          <div className="skill-per" per="60%" style={{ maxWidth: '71%' }}></div>
        </div>

        
        
        <div className="skill">
        <div className="skill-name"><span style={{color :'Orange'}}> BOOTSTRAP</span></div>
        <div className="skill-bar">
          <div className="skill-per" per="70%" style={{ maxWidth: '81%' }}></div>
        </div>
        
        

      </div>
      </div>
    </div>
    </div>
    // <div className='container-fluid bg-dark text-light min-vh-100 d-flex flex-column justify-content-center align-items-center'>
    //   <h1 className='text-danger mb-4'>Technologies I Worked</h1>
    //   <div className='row display-1'>

    //     <div className="col-3">
    //       <i className="fa-brands fa-html5"></i>
    //     </div>
    //     <div className="col-3">
    //       <i className="fa-brands fa-css3-alt"></i>
    //     </div>
    //     <div className="col-3">
    //       <i className="fa-brands fa-js"></i>
    //     </div>
    //     <div className="col-3">
    //       <i className="fa-brands fa-bootstrap"></i>
    //     </div>
    //     <div className="col-3">
    //       <i className="fa-brands fa-react" style={{ color: '#005eff' }}></i>
    //     </div>
    //     <div className="col-3">
    //       <i className="fa-brands fa-angular" style={{ color: '#ff0000' }}></i>
    //     </div>
    //     <div className="col-3">
    //       <i className="fa-brands fa-java" style={{ color: '#0061e0' }}></i>
    //     </div>
    //     <div className="col-3">
    //       <i className="fa-brands fa-vuejs" style={{ color: '#006b02' }}></i>
    //     </div>
    //   </div>

    // </div>
  )
}

export default Technologies
