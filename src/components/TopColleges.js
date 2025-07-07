import React from 'react';
import './TopColleges.css';

const TopColleges = () => {
  const colleges = [
    '/NLTI _ National Law Training Institute_files/images.png',
    '/NLTI _ National Law Training Institute_files/sQNCGxp5_400x400.jpg',
    '/NLTI _ National Law Training Institute_files/Nalsar-logo.png',
    '/NLTI _ National Law Training Institute_files/NUJS-LL-Size.jpg',
    '/NLTI _ National Law Training Institute_files/Jindal-Global-Law-School-min.png',
    '/NLTI _ National Law Training Institute_files/Nlujodhpur.png',
    '/NLTI _ National Law Training Institute_files/gnlu-logo.png',
    '/NLTI _ National Law Training Institute_files/nlu_mum.jpg',
    '/NLTI _ National Law Training Institute_files/raipur.png',
    '/NLTI _ National Law Training Institute_files/rhnul.png'
  ];

  return (
    <div className="tl-3-programs-pills top-colleges tl-14-categories pt-120 pb-100" 
         data-bg-color="#000000" 
         style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      <div className="container">
        <div className="">
          <h2 className="tl-4-section-title">
            <span className="nlti">NLTI</span> Students have secured <span className="last-word">admissions</span> in Top NLUs
          </h2>
        </div>
        
        <section className="">
          <div className="admission-wrapper">
            <div className="admission-container">
              {colleges.map((college, index) => (
                <div key={index} className="admission-icon" data-aos="fade-up" data-aos-delay={index * 100}>
                  <img src={college} alt="Member logo" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopColleges; 