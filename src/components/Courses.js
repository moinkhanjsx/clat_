import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      image: '/NLTI _ National Law Training Institute_files/a7a0faac-d132-46e0-965a-9b4d69d4ccee.png',
      title: 'Crack NLSAT 2026: NLSAT Online Coaching',
      description: 'Join India\'s best NLSAT Coaching plus Mentorship program for NLSAT 2026. Get live classes, mocks, and personal guidance.',
      link: 'https://www.clatnlti.com/course-details/4/crack-nlsat-2026-nlsat-online-coaching-and-mentorship-test-series'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/0b6820d3-d0af-4682-b897-cc6c1503bd8c.png',
      title: 'CLAT 2026 Blueprint: Platinum Package',
      description: 'Achieve your dream NLU with our Platinum Package. Includes mentorship, test series, and strategy sessions.',
      link: 'https://www.clatnlti.com/course-details/2/clat-2026-blueprint-platinum-package'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/924de89b-e0db-475e-adf8-ca649a73982b.jpeg',
      title: 'CLAT 2026 Blueprint: Silver Package',
      description: 'Your ultimate path to CLAT success. Get access to live classes, study material, and expert mentorship.',
      link: 'https://www.clatnlti.com/course-details/1/clat-2026-blueprint-silver-package'
    }
  ];

  return (
    <section className="tl-2-courses tl-2-blogs pt-120 pb-120" id="tl-12-courses">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>
            Explore Popular <span className="text-primary">Courses</span>
          </h2>
          <p className="lead" style={{ maxWidth: '600px', margin: 'auto' }}>
            Choose the best course for your law entrance journey. All courses are designed and mentored by NLSIU toppers.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {courses.map((course, index) => (
            <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="card h-100 shadow-lg border-0 rounded-4 card-hover">
                <img 
                  src={course.image} 
                  className="card-img-top rounded-top-4" 
                  alt={course.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{course.title}</h5>
                  <p className="card-text flex-grow-1">{course.description}</p>
                  <a 
                    href={course.link} 
                    className="btn btn-primary rounded-pill mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now <i className="fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses; 