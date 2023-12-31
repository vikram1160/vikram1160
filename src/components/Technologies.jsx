import React from 'react'
import './Technologies.css'

function Technologies() {
  return (

    <div className="body">
      <div className="skills">
      <h1 className='h1'>My SkiLLS</h1>
      <h2 className='h2'>* Technical Skills * </h2>
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

        <div className="skill">
        <div className="skill-name"><span style={{color :'Orange'}}> ANGULAR</span></div>
        <div className="skill-bar">
          <div className="skill-per" per="70%" style={{ maxWidth: '56%' }}></div>
        </div>
        </div>


        <div className="skill">
        <div className="skill-name"><span style={{color :'Orange'}}> REACT</span></div>
        <div className="skill-bar">
          <div className="skill-per" per="70%" style={{ maxWidth: '78%' }}></div>
        </div>
        </div>


        <div className="skill">
        <div className="skill-name"><span style={{color :'Orange'}}> MYSQL</span></div>
        <div className="skill-bar">
          <div className="skill-per" per="70%" style={{ maxWidth: '67%' }}></div>
        </div>
        </div>

        <div className="skill">
        <div className="skill-name"><span style={{color :'Orange'}}> JAVA</span></div>
        <div className="skill-bar">
          <div className="skill-per" per="70%" style={{ maxWidth: '40%' }}></div>
        </div>
        </div>
   
        <h3 className='h3'>* Personal Skills *</h3>
       <div className='sona'>
        •	Installation and configuration of various operating systems ie, Windows 7, Windows Vista, Windows 8.1, Windows 10, Windows11. <br/>
        •	Provide support to MS Office 365, Outlook MS Office & Antivirus.<br/>
        •	Laptop Parts Exchange & Repair.<br/>
        •	Diagnose hardware and raised ticket with vendor for hardware replacement.<br/>
        •	Installation & troubleshooting of Hardware, Replacement of parts of Desktop And
         Laptops.<br/>
        •	All Laptop Fromating Services
       </div>



      </div>
    </div>
    </div>
    
  )
}

export default Technologies
