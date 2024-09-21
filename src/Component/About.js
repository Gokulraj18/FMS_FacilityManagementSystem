import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'; 
import './css/responsive.css';
import aboutImg from './images/about-img.jpg'; // Update the image path as needed
import Features from './Features';
import Home from './Home';

const About = () => {
  return (
    <div className="hero_area">
      {/* About Section */}
      <section className="about_section layout_padding">
        <div className='About_Section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="detail-box">
                <h2>
                  About us
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="img-box">
                <img src={aboutImg} alt="About Us"/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};

export default About;