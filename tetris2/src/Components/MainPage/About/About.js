import React from "react";
import {Link} from 'react-router-dom'
import {
  FaTimes,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'
import mosesImg from '../../../images/mosesImg.png'
import samImg from '../../../images/samImg.png'
import tannerImg from '../../../images/tannerImg.jpg'
import justinImg from '../../../images/justin-img'
import "./About.scss";

const About = () => {
  return (
    <>
    <Link to='/mainpage' className='back'><FaTimes className='link-icon'/>Back</Link>
    <div className="about-container">
      <div className="image-container">
        <div className="image"></div>
      </div>
      <div className="text-container">
        <div className="about-title">About TETRIS FRIENDS</div>
        <h3>What?</h3>
        <p className="about-description">
          Tetris Friends is a game project that we've made while at Devmountain.
        </p>
        <h3>Why?</h3>
        <p className="about-description">
          We created this project for the purpose of growing our knowledge of software development. 
        </p>
        <h3>How?</h3>
        <p className="about-description">
          <p>Front End: <span>ReactJS</span> <span>SASS</span>
          </p>
          <p>Back End: <span>NodeJS</span>  <span>Axios</span> <span>Express</span> <span>BcryptJS</span>
          </p>
          <p>
            Database <span>PostgreSQL</span> <span>Heroku</span> <span>PgWeb</span> <span>Massive</span>
          </p>
        </p>

      </div>
    </div>
    <div className='about-us-container'>
      <div className='us-container'>
        <div className='about-div'>
          <div className='about-img-div'>
            <img src={justinImg} alt='justinImg'/>
          </div>
          <div className='about-text-div'>
            <h2>Justin Mires</h2>
            <div className='about-text-links'>
              <a href='https://github.com/Changg00?tab=repositories' target='_blank'><FaGithub className='link-icon'/>Github Account</a>
              <a><FaLinkedin className='link-icon'/>LinkedIn Account</a>
            </div>
          </div>
        </div>
        <div className='about-div'>
          <div className='about-img-div'>
            <img src={tannerImg} alt='tannerImg'/>
          </div>
          <div className='about-text-div'>
            <h2>Tanner Cooper</h2>
            <div className='about-text-links'>
              <a href='https://github.com/TannerCooper97' target='_blank' rel='noreferrer'><FaGithub className='link-icon'/>Github Account</a>
              <a><FaLinkedin className='link-icon'/>LinkedIn Account</a>
            </div>
          </div>
        </div>
        <div className='about-div'>
          <div className='about-img-div'>
            <img src={samImg} alt='samImg'/>
          </div>
          <div className='about-text-div'>
            <h2>Sam Thompson</h2>
            <div className='about-text-links'>
              <a href='https://github.com/Aretei' target='_blank' rel='noreferrer'><FaGithub className='link-icon'/>Github Account</a>
              <a><FaLinkedin className='link-icon'/>LinkedIn Account</a>
            </div>
          </div>
        </div>
        <div className='about-div'>
          <div className='about-img-div'>
            <img src={mosesImg} alt='mosesImg'/>
          </div>
          <div className='about-text-div'>
            <h2>Moses Kaumatule</h2>
            <div className='about-text-links'>
              <a href='https://github.com/mosesvk' target='_blank' rel='noreferrer'><FaGithub className='link-icon'/>Github Account</a>
              <a href='https://www.linkedin.com/in/mosesvk/' target='_blank' rel='noreferrer'><FaLinkedin className='link-icon'/>LinkedIn Account</a>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default About;
