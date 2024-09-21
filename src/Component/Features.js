import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import './css/responsive.css';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import Service from './Services';

const Features = () => {
  return (
    <div className="hero_area">
      {/* Service Section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={s1} alt="Maintenance" />
                </div>
                <div className="detail-box">
                  <h5>Maintenance</h5>
                  <p>When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={s2} alt="Electrical" />
                </div>
                <div className="detail-box">
                  <h5>Electrical</h5>
                  <p>When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={s3} alt="Plumbing" />
                </div>
                <div className="detail-box">
                  <h5>Plumbing</h5>
                  <p>When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="#">SignIn  for  More  Services</a>
          </div>
          <div>
            <Service/>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info_section">
        <div className="container">
          <h4>Get In Touch</h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  <div className="col-md-4">
                    <a href="#">
                      <div className="item">
                        <div className="img-box">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <p>Chennai</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#">
                      <div className="item">
                        <div className="img-box">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <p>+01 1234567890</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#">
                      <div className="item">
                        <div className="img-box">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <p>fms@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-box">
          <h4>Follow Us</h4>
          <div className="box">
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayDateYear"></span>FMS Copyright
            <a href="https://html.design/"> 2024 </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Features;