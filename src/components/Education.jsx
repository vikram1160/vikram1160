import React from 'react'

function Education() {
  return (
    <div className='container min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-4'>My Education</h1>
      <table class="table table-danger table-striped table-hover table-bordered">
        <thead>
          <tr className='table-dark'>
            <th scope="col" className='text-center text-danger'>Sr No</th>
            <th scope="col" className='text-center text-danger'>Qualification</th>
            <th scope="col" className='text-center text-danger'>College</th>
            <th scope="col" className='text-center text-danger'>Passout Year</th>
          </tr>
        </thead> 
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>SSC</td>
            <td>S P Highschool Kalimath </td>
            <td>2017</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>HSC</td>
            <td>Bhairavnath College Bhatana Aurangabad</td>
            <td>2019</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>BSC</td>
            <td>Shivaji Colloge kannad</td>
            <td>2023</td>
          </tr>
        </tbody>
      </table>
      {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
    </div>
    
  )
}

export default Education
