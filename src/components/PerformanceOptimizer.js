import React, { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      const criticalImages = [
        '/NLTI _ National Law Training Institute_files/logonlti.png',
        '/banner.png',
        '/home-1.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const setupLazyLoading = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            console.log(`Page load time: ${loadTime}ms`);
            
            // Send to analytics if load time is too high
            if (loadTime > 3000) {
              console.warn('Page load time exceeds 3 seconds');
            }
          }, 0);
        });
      }
    };

    // Initialize optimizations
    preloadResources();
    setupLazyLoading();
    monitorPerformance();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer; 