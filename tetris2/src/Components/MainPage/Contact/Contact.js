import React from "react";
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import "./Contact.scss";

const Contact = () => {
  return (
    <>
    <Link to='/mainpage' className='back'><FaTimes/>Back</Link>
    <div className="contact-container">
      <div className="contact-title">REACH OUT & LETS CHAT</div>
      <div className="contact-description">
        Feel free to contact us.
      </div>
      <div className="contact-block">
        <div className="block-1">
          <div className="address">
            <i className="fas fa-map-marker-alt"></i>
            <div className="address-details">
              <p>Location</p>
              <p>Lehi, UT</p>
            </div>
          </div>
          <div className="email">
            <i className="fas fa-envelope"></i>
            <div className="email-details">
              <p>Email</p>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="phone">
            <i className="fas fa-phone-alt"></i>
            <div className="phone-details">
              <p>Call</p>
              <p>(844) 433-8686</p>
            </div>
          </div>

          <div className="map">
            <iframe
              title="iframe"
              frameborder="0"
              scrolling="yes"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12150.028372419389!2d-111.8717138!3d40.419769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1e15119e2daaefd!2sDevmountain!5e0!3m2!1sen!2sus!4v1620762284400!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
        <div className="block-2">
          <form action="#">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div className="btn-container">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact