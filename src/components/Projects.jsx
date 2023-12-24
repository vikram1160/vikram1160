import React from 'react'

function Projects() {
   function working(){
    alert("I Am Working On A Website")
   }
  return (
    <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center'>

      <div className="main-container">
      <h1 className='text-center mb-4'>Projects</h1>

      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Youtube Clone</h5>
              <p className="card-text">Created a youtube clone to imeplement my knowledge in react. Created a youtube clone to imeplement my knowledge in react</p>
              <button onClick={working} className="btn btn-danger">Read More..</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Library Management System</h5>
              <p className="card-text">Created a project to avoid mannual work in library. All the work is done through project. It is built using latest technologies. </p>
              <button onClick={working} className="btn btn-danger">Read More..</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resume Creator</h5>
              <p className="card-text">Created a youtube clone to imeplement my knowledge in react. Created a youtube clone to imeplement my knowledge in react</p>
              <button onClick={working} className="btn btn-danger">Read More..</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Apple Clone</h5>
              <p className="card-text">Created a project to avoid mannual work in library. All the work is done through project. It is built using latest technologies. </p>
              <button onClick={working} className="btn btn-danger">Read More..</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
