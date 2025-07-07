import React from 'react';
import './SubBanner.css';

const SubBanner = () => {
  return (
    <section className="tl-1-sub-banner pt-50 text-center" 
             data-bg-color="#ffc632" 
             style={{ backgroundColor: 'rgb(255, 198, 50)' }}>
      <img 
        src="/NLTI _ National Law Training Institute_files/banner.png" 
        alt="Sub Banner"
        className="sub-banner-img"
      />
      <div className="tl-1-sub-banner-txt-top">
        <div className="bx-wrapper" style={{ maxWidth: '100%' }}>
          <div className="bx-viewport" style={{ width: '100%', overflow: 'hidden', position: 'relative', height: '168px' }}>
            <div className="tl-1-sub-banner-ticker tl-1-sub-banner-ticker-2" 
                 style={{ 
                   width: '1215%', 
                   position: 'relative', 
                   transitionDuration: '25s', 
                   transform: 'translate3d(0px, 0px, 0px)', 
                   transitionTimingFunction: 'linear' 
                 }}>
              <h3 style={{ 
                float: 'left', 
                listStyle: 'none', 
                position: 'relative', 
                width: '2300.22px' 
              }} className="bx-clone">
                Initiative by NLSIU Students
              </h3>
              <h3 style={{ 
                float: 'left', 
                listStyle: 'none', 
                position: 'relative', 
                width: '2300.22px' 
              }}>
                Initiative by NLSIU Students
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="tl-1-sub-banner-txt">
        <div className="bx-wrapper" style={{ maxWidth: '100%' }}>
          <div className="bx-viewport" style={{ width: '100%', overflow: 'hidden', position: 'relative', height: '168px' }}>
            <div className="tl-1-sub-banner-ticker" 
                 id="tl-1-sub-banner-ticker" 
                 style={{ 
                   width: '1215%', 
                   position: 'relative', 
                   transitionDuration: '25s', 
                   transform: 'translate3d(-2300.22px, 0px, 0px)', 
                   transitionTimingFunction: 'linear' 
                 }}>
              <h3 style={{ 
                float: 'left', 
                listStyle: 'none', 
                position: 'relative', 
                width: '2300.22px' 
              }}>
                Initiative by NLSIU Students
              </h3>
              <h3 style={{ 
                float: 'left', 
                listStyle: 'none', 
                position: 'relative', 
                width: '2300.22px' 
              }} className="bx-clone">
                Initiative by NLSIU Students
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubBanner; 