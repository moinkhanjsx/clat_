import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      image: '/NLTI _ National Law Training Institute_files/Ishaan.jpeg',
      name: 'Ishaan Sehrawat',
      rank: 'AIR 7 AILET & AIR 127 CLAT\'24',
      text: 'NLTI played a pivotal role in my CLAT and AILET journey, offering unparalleled mentorship and guidance. Interacting with mentors who have cleared such exams and secured top ranks added a valuable cherry on top. Their challenging mock tests enhanced my reasoning skills significantly. Truly, NLTI proved to be a game-changing partner.'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/Pranav.jpeg',
      name: 'Pranav Mittal',
      rank: 'AIR 93 CLAT\'24',
      text: 'I was a part of the Super 30 Course by NLTI. I practiced NLTI Mocks on a regular basis, and while going through the explanations, I received a genuine insight into where I had gone wrong while attempting. All in all, NLTI played a significant role in my CLAT & AILET preparation.'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/Devvrat.jpeg',
      name: 'Devvrat Chudasama',
      rank: 'AIR 104 CLAT\'24',
      text: 'I am incredibly grateful for NLTI, which played a pivotal role in my success in CLAT. The mentors were not just knowledgeable but also incredibly friendly and supportive. Their guidance and personalized approach helped me navigate through the complexities of CLAT, enabling me to achieve my goals.'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/Ashmit.jpeg',
      name: 'Ashmit',
      rank: 'AIR 38 CLAT\'23',
      text: 'NLTI helped me a lot throughout my clat and ailet prep. First of all the mocks are amazing. The diversity they offer you helps you get a hold of the exam and also helps you to test various approaches. Besides that, the mentorship and guidance is truly wonderful, people here tell you such minute things that make a lot of difference. I am really grateful to you guys. Thanks a lot!!!'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/Arshiya.jpeg',
      name: 'Arshiya Gupta',
      rank: 'AIR 3 AILET\'23',
      text: 'I think one of the most important things about the entire preparation process is first of all good guidance, and second of all great mocks. And who better to guide you that students who\'ve been through the same ordeal and that too not too long ago. The guidance I received from NLTI Mentors was just amazing. It was their insight that gave my preparation the direction it needed. Furthermore, it is very hard to come across good mocks that are based on a correct flow of logic and NLTI provided me with exactly those.'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/Divas.jpeg',
      name: 'Divas Upadhyay',
      rank: 'AIR 6 AILET & AIR 38 CLAT\'24',
      text: 'NLTI has played a significant role in my CLAT/AILET journey. Their mentors helped me navigate through a path that previously seemed to be shrouded in ambiguity, and provided insight and strategic advice as to how I could better myself. Adding to this invaluable assistance were their challenging yet reliable mocks and sectionals that helped me reflect on my shortcomings while also providing the practice I needed to overcome them. To top it all off NLTI helped me connect with several dedicated aspirants that boosted not just my knowledge but also my morale. NLTI\'s presence in my preparation has truly been of great help.'
    }
  ];

  return (
    <section className="tl-testimonial tl-2-testimonial pt-120 pb-120" 
             data-bg-color="#F3F1F1" 
             id="tl-12-test" 
             style={{ backgroundColor: 'rgb(243, 241, 241)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>
            What <span className="text-primary">Students</span> Say About Us
          </h2>
          <p className="lead" style={{ maxWidth: '600px', margin: 'auto' }}>
            Hear from our top performers and successful aspirants about their NLTI experience.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 shadow-lg border-0 rounded-4 p-3 card-hover">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="rounded-circle me-3" 
                    style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.rank}</small>
                  </div>
                </div>
                <p className="mb-0 flex-grow-1">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 