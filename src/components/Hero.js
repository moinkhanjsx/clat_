import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-modern d-flex align-items-center justify-content-center text-center" 
             style={{ 
               minHeight: '80vh', 
               background: 'linear-gradient(120deg, #1e3c72 0%, #2a5298 100%)', 
               color: '#fff', 
               position: 'relative', 
               overflow: 'hidden',
               marginTop: '80px'
             }}>
      <div className="container position-relative z-2">
        <img 
          src="/NLTI _ National Law Training Institute_files/logonlti.png" 
          alt="NLTI Logo" 
          style={{ 
            width: '120px', 
            marginBottom: '1.5rem', 
            filter: 'drop-shadow(0 4px 24px #0008)' 
          }}
        />
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '800', 
          letterSpacing: '1px',
          marginBottom: '1rem'
        }}>
          National Law Training Institute
        </h1>
        <p className="lead" style={{ 
          fontSize: '1.4rem', 
          margin: '1.5rem 0 2.5rem', 
          maxWidth: '600px', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }}>
          India's most trusted CLAT & NLSAT mentorship platform, run by NLSIU students. 
          Join the revolution in law entrance coaching!
        </p>
        <a 
          href="/user" 
          className="btn btn-warning btn-lg shadow" 
          style={{ 
            fontWeight: '700', 
            fontSize: '1.2rem', 
            borderRadius: '2rem', 
            padding: '0.75rem 2.5rem' 
          }}
        >
          Start Your Journey <i className="fa-regular fa-arrow-right"></i>
        </a>
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <a href="#clat-crash-course-2026" className="btn btn-outline-light btn-sm rounded-pill px-4">
            Crash Course 2026
          </a>
          <a href="#tl-12-courses" className="btn btn-outline-light btn-sm rounded-pill px-4">
            Courses
          </a>
          <a href="#tl-12-test" className="btn btn-outline-light btn-sm rounded-pill px-4">
            Testimonials
          </a>
          <a href="#tl-12-blogs" className="btn btn-outline-light btn-sm rounded-pill px-4">
            Blogs
          </a>
        </div>
      </div>
      
      {/* SVG Wave */}
      <svg 
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          height: '120px' 
        }} 
        viewBox="0 0 1440 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="#fff" 
          fillOpacity="1" 
          d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,53.3C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero; 