import { memo, useEffect } from "react";

export const PerformanceOptimizer = memo(() => {
  useEffect(() => {
    // Optimize images loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });

    // Optimize font loading
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    // Clean up function
    return () => {
      // Remove performance optimizations if component unmounts
      document.head.removeChild(link);
      document.head.removeChild(link2);
    };
  }, []);

  return null; // This component doesn't render anything
});