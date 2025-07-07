import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="tl-footer tl-7-footer tl-8-footer" aria-label="Site Footer" role="contentinfo">
      <div className="tl-footer-top">
        <div className="container">
          <div className="row gy-5 justify-content-between">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="tl-footer-widget tl-3-footer-widget">
                <a href="/" className="logo">
                  <img src="/NLTI _ National Law Training Institute_files/logonlti.png" alt="logo" />
                </a>

                <ul className="tl-footer-links tl-3-footer-contact-infos">
                  <li>
                    <p className="tl-3-footer-address">
                      <i className="fa-solid fa-location-dot mr-5"></i> 
                      3256, Sector 44D, Chandigarh 160047
                    </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone mr-5"></i> 
                    <a href="tel:+919876142144" className="tl-footer-number">(+91) 9876142144</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope mr-5"></i> 
                    <a href="mailto:clat.nlti@gmail.com" className="tl-footer-number">clat.nlti@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 order-1 order-sm-2 order-lg-1">
              <div className="row gy-5">
                <div className="col-6 col-xxs-12">
                  <div className="tl-footer-widget tl-3-footer-widget">
                    <h5 className="tl-footer-widget-title">Quick Links</h5>
                    <ul className="tl-footer-links">
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/contact-us">Contact Us</a></li>
                      <li><a href="/law-school-predictor">Law School Predictor</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-xxs-12">
                  <div className="tl-footer-widget tl-3-footer-widget">
                    <h5 className="tl-footer-widget-title">Information</h5>
                    <ul className="tl-footer-links">
                      <li><a href="/refund-policy">Refund Policy</a></li>
                      <li><a href="/privacy-policy">Privacy Policy</a></li>
                      <li><a href="/terms-use">Terms And Conditions</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12 order-2 order-sm-1 order-lg-2">
              <div className="tl-footer-widget tl-3-footer-widget">
                <h5 className="tl-footer-widget-title">Follow Us</h5>
                <ul className="tl-footer-socials tl-3-footer-socials">
                  <li>
                    <a href="https://www.youtube.com/channel/UC-962_m_libplMX26NZevfA" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/lawNLTI" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/national-law-training-institute/" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/nlti.clat/" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tl-footer-bottom">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-md-6">
              <p className="tl-3-copyright-txt m-0 text-center text-md-start">
                © 2023 by National Law Training Institute.
              </p>
            </div>
            <div className="col-md-6">
              {/* Additional footer content can go here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 