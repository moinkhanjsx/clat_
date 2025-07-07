import React, { useState } from 'react';
import './CrashCourse.css';

const CrashCourse = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <section id="clat-crash-course-2026" className="py-5" 
             style={{ background: 'linear-gradient(90deg, #ffe259 0%, #ffa751 100%)', position: 'relative' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 style={{ 
              fontWeight: '800', 
              fontSize: '2.5rem', 
              color: '#1e3c72' 
            }}>
              CLAT Crash Course 2026 
              <span className="badge bg-danger ms-2" style={{ fontSize: '1rem' }}>
                Limited Time Offer!
              </span>
            </h2>
            <ul className="list-unstyled mt-3 mb-4" style={{ fontSize: '1.1rem' }}>
              <li>✅ 2 classes per subject by NLSIU mentors</li>
              <li>✅ Personalized mentorship & 24/7 doubt support</li>
              <li>✅ 50+ full-length mocks & 100+ sectionals</li>
              <li>✅ Live strategy & doubt sessions</li>
              <li>✅ Comprehensive study material</li>
            </ul>
            <div className="d-flex gap-4 align-items-center mb-3">
              <div>
                <strong>Start Date:</strong> <span className="text-primary">August 1, 2025</span>
              </div>
              <div>
                <strong>Duration:</strong> <span className="text-primary">2 months</span>
              </div>
            </div>
            <div className="mb-3">
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#d35400' 
              }}>
                ₹9,999
              </span> 
              <del style={{ color: '#888' }}>₹14,999</del>
            </div>
            <a href="#crash-course-form" className="btn btn-primary btn-lg rounded-pill shadow">
              Register Now
            </a>
          </div>
          <div className="col-lg-5 text-center">
            <img 
              src="/NLTI _ National Law Training Institute_files/banner.png" 
              alt="Crash Course" 
              style={{ 
                maxWidth: '320px', 
                borderRadius: '1.5rem', 
                boxShadow: '0 8px 32px #0002' 
              }}
            />
          </div>
        </div>
        
        {/* Registration Form */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 col-lg-6">
            <form id="crash-course-form" className="p-4 rounded shadow" 
                  style={{ background: '#fff' }} onSubmit={handleSubmit}>
              <h4 className="mb-3" style={{ color: '#1e3c72', fontWeight: '700' }}>
                Quick Inquiry
              </h4>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <input 
                  type="tel" 
                  className="form-control" 
                  placeholder="Phone Number" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-pill">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrashCourse; 