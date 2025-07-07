import React from 'react';
import './Results.css';

const Results = () => {
  const stats = [
    { number: '40+', label: 'Mentors' },
    { number: '2K+', label: 'Enrolled Students' },
    { number: '10K+', label: 'CLAT Community' },
    { number: '500+', label: 'NLU Selections' }
  ];

  return (
    <section className="about-modern pt-120 pb-120" id="tl-12-result" 
             style={{ background: 'linear-gradient(120deg, #f3f1f1 60%, #e0e7ff 100%)' }}>
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row flex-column-reverse">
          <div className="col-lg-6">
            <div className="about-modern-content">
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.3rem', color: '#1e3c72' }}>
                Our <span className="text-primary">Results</span> Speak for Themselves
              </h2>
              <p className="lead mb-3" style={{ color: '#333' }}>
                At NLTI, we take immense pride in the extraordinary achievements of our students. 
                Our innovative mentorship and comprehensive study material have set new benchmarks 
                in CLAT and NLSAT success.
              </p>
              <ul className="list-unstyled mb-4" style={{ fontSize: '1.1rem' }}>
                <li>🌟 <strong>6 out of Top 10</strong> AILET 2024 ranks</li>
                <li>🌟 <strong>15+</strong> NLSIU selections in the last batch</li>
                <li>🌟 <strong>25+</strong> NLU-Delhi selections</li>
                <li>🌟 <strong>200+</strong> NLU selections overall</li>
              </ul>
              <p className="mb-4" style={{ color: '#444' }}>
                Join NLTI and experience the difference that quality mentorship and material 
                can make in realizing your law school dreams!
              </p>
              <div className="row g-3 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6 col-md-3" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="about-stat shadow-sm rounded-4 p-3 bg-white">
                      <div className="fw-bold" style={{ fontSize: '1.7rem', color: '#2a5298' }}>
                        {stat.number}
                      </div>
                      <div className="small text-muted">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="about-modern-img position-relative">
              <img 
                src="/NLTI _ National Law Training Institute_files/home-2.png" 
                alt="NLTI Results" 
                className="img-fluid rounded-4 shadow-lg mb-3" 
                style={{ maxWidth: '400px' }}
                data-aos="fade-left"
              />
              <img 
                src="/NLTI _ National Law Training Institute_files/sticker.png" 
                alt="NLTI Sticker" 
                className="position-absolute" 
                style={{ bottom: '-30px', right: '10%', width: '80px' }}
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
        <div className="about-ticker mt-5">
          <div className="d-flex flex-nowrap overflow-auto" style={{ gap: '2rem' }}>
            {['National', 'Law', 'Training', 'Institute'].map((word, index) => (
              <span key={index} className="badge bg-primary bg-gradient fs-6 px-4 py-2">
                {word}
              </span>
            ))}
            {['National', 'Law', 'Training', 'Institute'].map((word, index) => (
              <span key={`repeat-${index}`} className="badge bg-primary bg-gradient fs-6 px-4 py-2">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results; 