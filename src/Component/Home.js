import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';  
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'; 
import './css/responsive.css';
import slider from './images/slider-img.png'; 
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import About from './About';
import Features from './Features';

const Home = () => {
  const auth = useAuth();  

  return (
    <div className="hero_area">
      {/* Header Section */}
      <header className="header_section">
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="/">
                <span>FMS</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                  </li>
                  {auth.user ? (
                    <>
                      <li className="nav-item">
                        <span className="nav-link">Hi {auth.user} :❩</span>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link btn" onClick={auth.logout}>Logout</button>
                      </li>
                    </>
                  ) : (
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Sign In</NavLink>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Slider Section */}
      <section className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <h1>
                  Repair and <br />
                  Maintenance <br />
                  Services
                </h1>
                <p>
                We provide expert repair and maintenance to keep your assets in top condition, ensuring reliability and extending their lifespan. From preventive care to emergency fixes, we’ve got you covered.
                </p>
                <NavLink to="/contact">
                  Contact Us
                </NavLink>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={slider} alt="Slider" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature_section">
        <div className="container">
          <div className="feature_container">
            <div className="box">
              <div className="img-box">
                <img src={s1} alt="Feature 1" />
              </div>
              <p>REPAIR</p>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={s2} alt="Feature 2" />
              </div>
              <p>IMPROVE</p>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={s3} alt="Feature 3" />
              </div>
              <p>MAINTAIN</p>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Features/>
    </div>
  );
};

export default Home;