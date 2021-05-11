import React from "react";
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import "./About.scss";

const About = () => {
  return (
    <>
    <Link to='/mainpage'><FaTimes/>Back</Link>
    <div className="about-container">
      <div className="image-container">
        <div className="image"></div>
      </div>
      <div className="text-container">
        <div className="about-title">About Tetris Friends</div>
        <p className="about-description">
          Tetris Friends is a game project that we've made while at Devmountain.
        </p>
        <p className="about-description">
          We created this project for the purpose of growing our knowledge of software development. 
        </p>
        <p className="about-description">
          This project took 3 weeks to complete. Below is a list of the different technologies that we used. d
        </p>

        

      </div>
    </div>
    <div className='about-us-container'>
      <div className='us-container'>
        <h1>ABOUT US</h1>
      </div>
    </div>
    </>
  );
}

export default About;
