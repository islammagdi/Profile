import { useEffect, useState } from 'react';

export function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main glow effect */}
      <div
        className="fixed pointer-events-none z-50 rounded-full opacity-60 transition-opacity duration-300 ease-out"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.3) 25%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Inner bright core */}
      <div
        className="fixed pointer-events-none z-50 rounded-full opacity-80"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(196, 113, 247, 0.6) 0%, rgba(236, 72, 153, 0.4) 30%, transparent 60%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Smallest inner glow */}
      <div
        className="fixed pointer-events-none z-50 rounded-full opacity-90"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(217, 129, 247, 0.8) 0%, rgba(244, 114, 182, 0.6) 40%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </>
  );
}