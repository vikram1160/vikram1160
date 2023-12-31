import React from 'react'
import image1 from '../assets/ssc.jpg'
import image2 from '../assets/hsc.jpg'
import image3 from '../assets/bca.jpg'

function Education() {
  return (
    <div>
      <section class="container py-2 bg-info" id="about">
        <div class="row mt-2 py-3">
          <div class="col-12 d-flex flex-column text-center">
            <h2 className='btn btn-warning'>Education</h2>
            <h5 class="text-secondary fw-normal py-2 fst-italic">Learn more about my Education, my background, and what motivates me.</h5>
          </div>
        </div>
        <div class="row flex-row-reverse flex-md-row mt-5 pt-5">
          <div class="col-9 col-md-5 text-md-end">
            <h5 className='text-danger class'>2017</h5>
            <h5>SSC</h5>
            <h5>Percentage:62%</h5>
            <p>SP  High School Kalimath </p>
          </div>
          <div class="col-3 col-md-2 img text-center">
            <img class="rounded-circle border border-5 border-dark-subtle img-fluid" src={image1} alt="img" />
          </div>
        </div>
        <div class="row justify-content-md-end mt-5 pt-5">
          <div class="col-3 col-md-2 img text-center">
            <img class="rounded-circle border border-5 border-dark-subtle img-fluid" src={image2} alt="img" />
          </div>
          <div class="col-9 col-md-5">
            <h5>2019</h5>
            <h5>HSC</h5>
            <h5>Bhairavnath College Bhatana</h5>
            <h5>Percentage:56%</h5>
            <p>During my university years, I studied Bio and science and gained hands-on experience through internships and freelance projects. This period fueled my passion for creating innovative solutions and solving complex problems.</p>
          </div>
        </div>
        <div class="row flex-row-reverse flex-md-row mt-5 pt-5">
          <div class="col-9 col-md-5 text-md-end">
            <h5>2023</h5>
            <h5>BSC</h5>
            <h5>Shivaji College Kannad</h5>
            <h5>Percentage:63%</h5>
            <p>Throughout my career, I have consistently sought opportunities to refine my skills and stay updated with the latest technologies. I strive for excellence in every project I undertake and aim to deliver valuable and impactful results.</p>
          </div>
          <div class="col-3 col-md-2 img text-center">
            <img class="rounded-circle border border-5 border-dark-subtle img-fluid" src={image3} alt="img" />
          </div>
        </div>
       
      </section>
    </div>
  )
}

export default Education


