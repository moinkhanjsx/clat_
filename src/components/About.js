import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    const video = document.getElementById('videoPlayer');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="tl-7-about" data-bg-color="#F3F1F1" 
             style={{ backgroundColor: 'rgb(243, 241, 241)' }}>
      <div className="col-lg-12 right-wrapper container" id="tl-12-banner">
        <div className="tl-7-section-heading tl-7-about-heading yellow-clr notification-trans">
          <h6 className="tl-7-section-sub-title">study with us</h6>
          <h2 className="tl-7-section-title">
            Behind the scenes: The story behind <span className="last-word">NLTI</span> 💙
          </h2>
        </div>
        <div className="video-wrap">
          <video 
            id="videoPlayer" 
            width="420" 
            height="450" 
            src="assets/video/video-player.mp4" 
            muted 
            autoPlay={false}
            loop
          />
          <div id="playButton" 
               style={{ 
                 position: 'absolute', 
                 top: '50%', 
                 left: '50%', 
                 transform: 'translate(-50%, -50%)',
                 cursor: 'pointer'
               }}
               onClick={playPause}>
            <button className="play-btn">
              <img 
                src="/NLTI _ National Law Training Institute_files/icon-play.png" 
                width="100" 
                height="100" 
                alt="Play Icon"
                style={{ 
                  opacity: isPlaying ? 0 : 1,
                  transition: 'opacity 0.3s ease'
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 