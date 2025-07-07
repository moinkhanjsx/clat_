import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    course: ''
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
    console.log('Counseling form submitted:', formData);
    alert('Thank you! We will contact you soon to schedule your free counseling session.');
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      city: '',
      course: ''
    });
    closePopup();
  };

  const closePopup = () => {
    document.getElementById('popup').style.display = 'none';
  };

  return (
    <div id="popup" className="popup" style={{ display: 'none' }}>
      <div className="popup-content">
        <span className="close" onClick={closePopup}>×</span>
        <h2>Book a Counseling Session</h2>
        <h6>Fill your details</h6>

        <form className="tl-12-admission-form tl-12-admission-form sendCounselingSession" 
              id="tl-12-admission-form" 
              onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <label htmlFor="tl-12-applicant-first-name">Name*</label>
            <input 
              type="text" 
              name="fullName" 
              id="tl-12-applicant-first-name" 
              placeholder="Enter Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-wrapper wrapform">
            <label htmlFor="tl-12-applicant-last-name">Phone Number*</label>
            <input 
              type="tel" 
              name="mobile" 
              id="tl-12-applicant-last-name" 
              placeholder="Enter your number (+91)"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
            <div className="mobile">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="tl-12-applicant-mail">Email*</label>
            <input 
              type="email" 
              name="email" 
              id="tl-12-applicant-mail" 
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="tl-12-applicant-city">City*</label>
            <input 
              type="text" 
              name="city" 
              id="tl-12-applicant-city" 
              placeholder="Enter City"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="tl-12-exam">Choose your Course*</label>
            <select 
              name="course" 
              id="tl-12-exam"
              value={formData.course}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Choose a Course</option>
              <option value="CLAT & AILET">CLAT & AILET</option>
              <option value="NLSAT">NLSAT</option>
              <option value="CUET-PG LLB">CUET-PG LLB</option>
            </select>
          </div>
          <div className="form-button">
            <button type="submit">Schedule a Free Session</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup; 