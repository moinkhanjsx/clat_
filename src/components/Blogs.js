import React from 'react';
import './Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      image: '/NLTI _ National Law Training Institute_files/5e7b87c6-6a5c-4d37-a154-4cfc090c66ed.jpg',
      badge: 'Interview',
      badgeClass: 'bg-primary',
      date: 'July 07, 2025',
      title: 'NLSAT Topper Avilokita Shares Her AIR 2 Journey',
      description: 'Avilokita Kesharwani\'s outstanding achievement as the All India Rank 2 in NLSAT 2025. Read her preparation journey, tips, and strategies for success.',
      link: 'https://www.clatnlti.com/blog-details/174/nlsat-topper-avilokita-shares-her-air-2-journey-2025'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/4ea27518-5352-47df-9449-08bab518a7d7.jpg',
      badge: 'Timetable',
      badgeClass: 'bg-success',
      date: 'July 06, 2025',
      title: 'Daily Timetable for CUET PG DU LLB 2026 Preparation',
      description: 'A detailed daily timetable and preparation plan for CUET PG DU LLB 2026 aspirants, curated by NLTI mentors.',
      link: 'https://www.clatnlti.com/blog-details/173/daily-timetable-for-cuet-pg-du-llb-2026-preparation'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/c555d350-36f9-4146-9175-e738c80e0406.jpg',
      badge: 'Tips',
      badgeClass: 'bg-warning text-dark',
      date: 'July 06, 2025',
      title: 'CUET PG DU LLB: Aptitude & Reasoning Preparation Tips',
      description: 'Master the General Aptitude and Reasoning section for CUET PG DU LLB 2026 with these expert tips and resources.',
      link: 'https://www.clatnlti.com/blog-details/172/cuet-pg-du-llb-aptitude-reasoning-preparation-tips'
    },
    {
      image: '/NLTI _ National Law Training Institute_files/953ae0d0-1ef7-4837-ba02-400679d4003c.jpeg',
      badge: 'Resources',
      badgeClass: 'bg-info text-dark',
      date: 'July 06, 2025',
      title: 'Top Resources for CUET PG Law (COQP11) Preparation',
      description: 'A curated list of the best books, online resources, and strategies for CUET PG Law 2026 (COQP11).',
      link: 'https://www.clatnlti.com/blog-details/171/top-resources-for-cuet-pg-law-coqp11-preparation-2026'
    }
  ];

  return (
    <section className="tl-4-blogs tl-3-section-spacing py-5" id="tl-12-blogs" 
             style={{ background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>
            Latest <span className="text-primary">News & Blogs</span>
          </h2>
          <p className="lead" style={{ maxWidth: '600px', margin: 'auto' }}>
            Stay updated with the latest tips, success stories, and law entrance news from NLTI mentors and toppers.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {blogs.map((blog, index) => (
            <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="card h-100 shadow border-0 rounded-4 blog-card-hover">
                <div className="blog-img-wrap position-relative" 
                     style={{ cursor: 'pointer' }} 
                     onClick={() => window.open(blog.link, '_blank')}>
                  <img 
                    src={blog.image} 
                    className="card-img-top rounded-top-4" 
                    alt="Blog Thumbnail"
                  />
                  <span className={`badge ${blog.badgeClass} position-absolute top-0 end-0 m-2`}>
                    {blog.badge}
                  </span>
                </div>
                <div className="card-body d-flex flex-column">
                  <span className="text-muted mb-2">
                    <i className="fa-regular fa-clock"></i> {blog.date}
                  </span>
                  <h5 className="card-title fw-bold">{blog.title}</h5>
                  <p className="card-text flex-grow-1">{blog.description}</p>
                  <a 
                    className="btn btn-outline-primary rounded-pill mt-2 align-self-start" 
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More <i className="fa-regular fa-angle-right"></i>
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

export default Blogs; 