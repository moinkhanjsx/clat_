import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CrashCourse from './components/CrashCourse';
import About from './components/About';
import Features from './components/Features';
import Results from './components/Results';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import TopColleges from './components/TopColleges';
import Blogs from './components/Blogs';
import SubBanner from './components/SubBanner';
import Footer from './components/Footer';
import Popup from './components/Popup';
import CourseDetails from './components/CourseDetails';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 60,
        easing: 'ease-in-out',
      });
    }

    // Add loading animation
    const timer = setTimeout(() => {
      const loadingDiv = document.getElementById('loadingDiv');
      if (loadingDiv) {
        loadingDiv.classList.add('hidden');
        setTimeout(() => {
          loadingDiv.style.display = 'none';
        }, 500);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <PerformanceOptimizer />
        <div id="loadingDiv">
          <div className="loader"></div>
        </div>
        
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <CrashCourse />
              <About />
              <Features />
              <Results />
              <Courses />
              <Testimonials />
              <TopColleges />
              <Blogs />
              <SubBanner />
              <Footer />
              <Popup />
            </>
          } />
          <Route path="/courses" element={
            <>
              <Header />
              <CourseDetails />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 