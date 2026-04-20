import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { PerformanceOptimizer } from "./components/PerformanceOptimizer";
import { ScrollToTop } from "./components/ScrollToTop";
import { useEffect, Suspense, lazy, memo } from "react";

// Lazy load components that are below the fold
const About = lazy(() => import("./components/About").then(module => ({ default: module.About })));
const Portfolio = lazy(() => import("./components/Portfolio").then(module => ({ default: module.Portfolio })));
const Skills = lazy(() => import("./components/Skills").then(module => ({ default: module.Skills })));
const Contact = lazy(() => import("./components/Contact").then(module => ({ default: module.Contact })));

// Loading fallback component
const SectionSkeleton = memo(() => (
  <div className="w-full min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse">
      <div className="h-8 bg-purple-300/20 rounded-lg w-64 mb-4"></div>
      <div className="h-4 bg-purple-300/10 rounded w-48 mb-2"></div>
      <div className="h-4 bg-purple-300/10 rounded w-56"></div>
    </div>
  </div>
));

// Optimize favicon setup to run only once
const setupFavicon = () => {
  document.title = "Islam Magdi - UI/UX Designer Portfolio";
  
  const faviconUrl = "https://res.cloudinary.com/dwi30ki0t/image/upload/v1758462644/IMG_20250501_012812_983_fnqe6p.webp";
  
  // Remove existing favicon links
  const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
  existingFavicons.forEach(favicon => favicon.remove());
  
  // Create and set new favicon
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/webp';
  favicon.href = faviconUrl;
  document.head.appendChild(favicon);
  
  // Also set as apple-touch-icon for better mobile support
  const appleTouchIcon = document.createElement('link');
  appleTouchIcon.rel = 'apple-touch-icon';
  appleTouchIcon.href = faviconUrl;
  document.head.appendChild(appleTouchIcon);
};

export default function App() {
  useEffect(() => {
    setupFavicon();
  }, []); // Empty dependency array - runs only once
  
  return (
    <div className="dark min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{ margin: 0, padding: 0, boxSizing: 'border-box', maxWidth: '100vw', overflowX: 'hidden' }}>
      <PerformanceOptimizer />
      
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Optimized background elements */}
      <AnimatedBackground />
      
      <Navigation />
      
      <main className="relative z-10 w-full">
        <Hero />
        
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      
      {/* Floating scroll to top button */}
      <ScrollToTop />
    </div>
  );
}