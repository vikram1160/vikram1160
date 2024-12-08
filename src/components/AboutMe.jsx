import React from "react";
import "./AboutMe.css";
import vikram from "../assets/vikram.jpg.jpg";

const AboutMe = () => {
    return (
    <>
     <div className="mp">
        <img src={vikram} className="d-block  " alt="viki" />
        <div className="mx-4">
          <h3 className="md">
            I Am <span className="vikram">Vikram</span>
          </h3>
          <hr/>
          <h3 className="sam">
            I am from maharashtra , dist -
            <span className="pm"> sambhaji nagar</span>
          </h3>
          <hr/>
          <h3>Frontend Developer</h3>
          <hr/>
          <h3>
            <span className="class"> JavaScript Framework: </span>Angular, React
            <br />
            <hr/>
            {/* <h3>
              <span className="class1">Database: </span> MySql
            </h3> */}
            <hr/>
            {/* <h3>
              <span className="class2">Backend: </span> Core Java
            </h3> */}
            <hr/>
          </h3>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
