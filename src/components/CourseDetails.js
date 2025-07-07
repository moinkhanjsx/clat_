import React, { useState } from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
  const [selectedCourse, setSelectedCourse] = useState('crash-course');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const courses = {
    'crash-course': {
      title: 'CLAT Crash Course 2026',
      price: '₹15,000',
      originalPrice: '₹25,000',
      duration: '3 Months',
      startDate: 'January 15, 2026',
      overview: 'Intensive crash course designed to maximize your CLAT preparation in the shortest time possible. Perfect for students who want to make the most of their remaining time.',
      features: [
        '2 Classes per Subject (English, GK, Legal Aptitude, Logical Reasoning, Mathematics)',
        'Personal Mentorship Sessions',
        '20 Full-Length Mock Tests',
        'Study Material & Notes',
        'Doubt Clearing Sessions',
        'Performance Analytics',
        'Previous Year Papers Analysis',
        'Interview Preparation'
      ],
      schedule: [
        { day: 'Monday', time: '6:00 PM - 8:00 PM', subject: 'English & GK' },
        { day: 'Wednesday', time: '6:00 PM - 8:00 PM', subject: 'Legal Aptitude' },
        { day: 'Friday', time: '6:00 PM - 8:00 PM', subject: 'Logical Reasoning' },
        { day: 'Saturday', time: '10:00 AM - 12:00 PM', subject: 'Mathematics' },
        { day: 'Sunday', time: '2:00 PM - 4:00 PM', subject: 'Mock Test & Analysis' }
      ],
      eligibility: 'Class 12 students or graduates appearing for CLAT 2026',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    'comprehensive': {
      title: 'CLAT Comprehensive Course 2026',
      price: '₹35,000',
      originalPrice: '₹45,000',
      duration: '8 Months',
      startDate: 'March 1, 2026',
      overview: 'Complete preparation course covering all aspects of CLAT with extensive practice and personalized guidance.',
      features: [
        '4 Classes per Subject Weekly',
        'One-on-One Mentorship',
        '50+ Mock Tests',
        'Comprehensive Study Material',
        'Daily Doubt Clearing',
        'Advanced Analytics Dashboard',
        'Previous 10 Years Papers',
        'Interview & GD Preparation',
        'Career Counseling'
      ],
      schedule: [
        { day: 'Monday', time: '5:00 PM - 7:00 PM', subject: 'English' },
        { day: 'Tuesday', time: '5:00 PM - 7:00 PM', subject: 'GK & Current Affairs' },
        { day: 'Wednesday', time: '5:00 PM - 7:00 PM', subject: 'Legal Aptitude' },
        { day: 'Thursday', time: '5:00 PM - 7:00 PM', subject: 'Logical Reasoning' },
        { day: 'Friday', time: '5:00 PM - 7:00 PM', subject: 'Mathematics' },
        { day: 'Saturday', time: '10:00 AM - 1:00 PM', subject: 'Mock Test & Analysis' }
      ],
      eligibility: 'Class 11/12 students or graduates with basic English and Mathematics knowledge',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  };

  const currentCourse = courses[selectedCourse];

  return (
    <div className="course-details">
      <div className="container">
        {/* Course Selection */}
        <div className="course-selection mb-5">
          <h2 className="text-center mb-4">Choose Your Course</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="course-tabs">
                <button 
                  className={`course-tab ${selectedCourse === 'crash-course' ? 'active' : ''}`}
                  onClick={() => setSelectedCourse('crash-course')}
                >
                  Crash Course
                </button>
                <button 
                  className={`course-tab ${selectedCourse === 'comprehensive' ? 'active' : ''}`}
                  onClick={() => setSelectedCourse('comprehensive')}
                >
                  Comprehensive Course
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Header */}
        <div className="course-header mb-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="course-title">{currentCourse.title}</h1>
              <p className="course-overview">{currentCourse.overview}</p>
              <div className="course-meta">
                <span className="meta-item">
                  <i className="fas fa-clock"></i> Duration: {currentCourse.duration}
                </span>
                <span className="meta-item">
                  <i className="fas fa-calendar"></i> Start Date: {currentCourse.startDate}
                </span>
                <span className="meta-item">
                  <i className="fas fa-users"></i> Batch Size: 25 Students
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-card">
                <div className="price-tag">
                  <span className="current-price">{currentCourse.price}</span>
                  <span className="original-price">{currentCourse.originalPrice}</span>
                </div>
                <div className="discount-badge">Save ₹10,000</div>
                <button className="btn btn-primary btn-lg w-100 mb-3">
                  <i className="fas fa-phone"></i> Book Now
                </button>
                <button className="btn btn-outline-primary w-100">
                  <i className="fas fa-download"></i> Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Features */}
        <div className="course-features mb-5">
          <h3 className="section-title">What You'll Get</h3>
          <div className="row">
            {currentCourse.features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h5>{feature}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Video */}
        <div className="demo-video mb-5">
          <h3 className="section-title">Watch Demo Class</h3>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="video-container">
                <div className="video-placeholder" onClick={() => setShowVideoModal(true)}>
                  <img src="/home-1.png" alt="Demo Class" className="video-thumbnail" />
                  <div className="play-button">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="course-schedule mb-5">
          <h3 className="section-title">Class Schedule</h3>
          <div className="row">
            {currentCourse.schedule.map((session, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-3">
                <div className="schedule-card">
                  <div className="schedule-day">{session.day}</div>
                  <div className="schedule-time">{session.time}</div>
                  <div className="schedule-subject">{session.subject}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="course-eligibility mb-5">
          <h3 className="section-title">Eligibility</h3>
          <div className="eligibility-card">
            <p>{currentCourse.eligibility}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="course-cta">
          <div className="cta-card">
            <h3>Ready to Start Your CLAT Journey?</h3>
            <p>Join thousands of successful students who chose NLTI for their CLAT preparation</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-lg me-3">
                <i className="fas fa-phone"></i> Get a Call Back
              </button>
              <button className="btn btn-outline-primary btn-lg">
                <i className="fas fa-whatsapp"></i> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="video-modal" onClick={() => setShowVideoModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowVideoModal(false)}>
              <i className="fas fa-times"></i>
            </button>
            <iframe
              src={currentCourse.videoUrl}
              title="Demo Class"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails; 