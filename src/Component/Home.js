import React from 'react';
import abtImg from './abtimg.png.png';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth'; 
import './Home.css';
import { Service } from './Service';

export default function Home() {
  const auth = useAuth();

  return (
    <div className='body'>
      <header>
        <NavLink to="/" className="logo">FMS</NavLink>
        <div className="menuToggle"></div>
        <ul className="nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
          {auth.user ? (
            <>
              <li>{auth.user}</li> 
              <li><button className='button-logout' onClick={auth.logout}>Logout</button></li> 
            </>
          ) : (
            <li><NavLink to="/login">Login</NavLink></li> 
          )}
        </ul>
      </header>
      <div className="home">
      </div>
      <section>
        <div className="aboutus" id="about">
          <p className="heading"><span>A</span>bout Us</p>
          <p>Welcome to Facility Management System. We're dedicated to revolutionizing facility management through innovative solutions. Our mission is to empower facility managers with cutting-edge tools to enhance efficiency and productivity. With customizable features and dedicated support, we're committed to optimizing your operations. Contact us today to learn more.</p>
          <img className="imgCon" src={abtImg} alt=""/>
        </div>
      </section>
      <section id='service'>
        <div className="title">
          <p className="heading"><span>S</span>ervice </p>
          <p>Service That we can provide from random partnership..</p>
        </div>
        <Service/>
      </section>
      <section className="contact" id="contact">
        <div className="title">
          <p className="heading"><span>C</span>ontact Us</p>
          <p>Contact us for further details :)</p>
        </div>
        <div className="boxContainer">
          <div className="box">
            <h4>Send Message</h4>
            <div className="input">
              <input type="text" placeholder="Name"/>
            </div>
            <div className="input">
              <input type="text" placeholder="Email"/>
            </div>
            <div className="input">
              <textarea placeholder="message"></textarea>
            </div>
            <div className="input">
              <input type="submit" placeholder="Submit"/>
            </div>
          </div>
        </div>
      </section>
      <p className="footer">&copy; 2024 FMS. All rights reserved.</p>
    </div>
  );
}
