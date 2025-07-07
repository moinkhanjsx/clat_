import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '/NLTI _ National Law Training Institute_files/icon-1.png',
      title: 'Run by NLSIU Students Exclusively',
      description: 'NLTI is an initiative started by NLSIU Students who have cracked CLAT with flying colours.'
    },
    {
      icon: '/NLTI _ National Law Training Institute_files/service-1.png',
      title: 'Unprecedented Selection Ratio',
      description: 'NLTI has produced over 100 NLS, NALSAR and NLUD Selections and more than 500 selections across NLUs.'
    },
    {
      icon: '/NLTI _ National Law Training Institute_files/service-3.png',
      title: 'Personalised Mentorship by NLSIU Mentors',
      description: 'Get 24/7 access to NLSIU Students who will act as your best friend, guide, and mentor.'
    },
    {
      icon: '/NLTI _ National Law Training Institute_files/icon-8.png',
      title: 'Daily DCS and Weekly Live Doubt Clearing Sessions',
      description: 'All your doubts will be solved in real-time via Telegram Chat and live concept/strategy sessions will be taken weekly.'
    },
    {
      icon: '/NLTI _ National Law Training Institute_files/service-2.png',
      title: 'Study Buddy Groups',
      description: 'You will be put in a group of like-minded study buddies to ensure competitiveness and resource sharing among aspirants.'
    },
    {
      icon: '/NLTI _ National Law Training Institute_files/icon-6.png',
      title: 'Comprehensive Test Series',
      description: 'You will be provided 50 CLAT, 10 AILET, 10 OLET and 100 Sectional Mocks in our course coupled with personalised time tables and schedules.'
    }
  ];

  return (
    <div className="tl-3-programs-pills indispensable-cat tl-14-categories pt-120 pb-120" 
         data-bg-color="#000000" 
         style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      <div className="container">
        <h2 className="tl-14-section-title text-center">
          Here's why <span className="nlti">NLTI</span> is indispensable for your <span className="last-word">CLAT Preparation!</span>
        </h2>

        <div className="row tl-14-categories-row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-6 col-xxs-12" 
                 data-aos="fade-up" 
                 data-aos-delay={index * 100}>
              <div className="tl-3-single-program tl-14-category">
                <div className="tl-3-single-program-icon">
                  <img src={feature.icon} alt="icon" />
                </div>
                <div>
                  <h5 className="tl-3-single-program-title mb-2">{feature.title}</h5>
                  <p className="tl-3-single-program-paragrap">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 