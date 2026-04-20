import { memo } from "react";

export const AnimatedBackground = memo(() => {
  // Reduced number of elements for better performance
  const bubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: ((i * 17 + 23) % 150) + 80, // 80-230px (larger but fewer)
    x: ((i * 31 + 7) % 100), // 0-100%
    y: ((i * 43 + 11) % 100), // 0-100%
    opacity: ((i * 13 + 5) % 30) / 100 + 0.15, // 0.15-0.45 opacity
  }));

  const particles = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: ((i * 19 + 7) % 6) + 6, // 6-12px
    x: ((i * 37 + 13) % 100),
    y: ((i * 29 + 17) % 100),
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Optimized large floating bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full will-change-transform"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            background: `radial-gradient(circle, rgba(168, 85, 247, ${bubble.opacity}) 0%, rgba(236, 72, 153, ${bubble.opacity * 0.7}) 50%, transparent 70%)`,
            filter: 'blur(3px)',
            backfaceVisibility: 'hidden',
          }}
        />
      ))}

      {/* Optimized small glowing particles */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute rounded-full will-change-transform"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(217, 129, 247, 0.9) 0%, rgba(244, 114, 182, 0.7) 50%, transparent 80%)`,
            boxShadow: `0 0 ${particle.size * 1.5}px rgba(168, 85, 247, 0.3)`,
            opacity: 0.7,
            backfaceVisibility: 'hidden',
          }}
        />
      ))}

      {/* Geometric shapes - optimized */}
      <div
        className="absolute top-1/4 left-1/6 w-28 h-28 rounded-lg will-change-transform"
        style={{
          background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.12) 0%, rgba(236, 72, 153, 0.08) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          backfaceVisibility: 'hidden',
        }}
      />

      <div
        className="absolute top-3/4 right-1/4 w-20 h-20 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.18) 0%, rgba(147, 51, 234, 0.12) 70%, transparent 100%)',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          opacity: 0.55,
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Single optimized ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.04) 0%, rgba(236, 72, 153, 0.02) 40%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.6,
          backfaceVisibility: 'hidden',
        }}
      />
    </div>
  );
});