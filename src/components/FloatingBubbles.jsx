import { useState } from 'react';

/**
 * FloatingBubbles - Soft, slow-moving background elements
 * Uses pure CSS animations instead of Framer Motion for much better performance.
 */
const FloatingBubbles = () => {
  // Generate random bubbles once on mount using lazy state initialization
  const [bubbles] = useState(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 10,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 12 + 14,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.1 + 0.03,
      color:
        i % 3 === 0
          ? `rgba(249, 160, 191, ${Math.random() * 0.1 + 0.03})`
          : i % 3 === 1
            ? `rgba(196, 171, 253, ${Math.random() * 0.1 + 0.03})`
            : `rgba(253, 230, 138, ${Math.random() * 0.1 + 0.03})`,
    }));
  });

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            background: bubble.color,
            filter: `blur(${bubble.size > 35 ? 6 : 2}px)`,
            animation: `float-css ${bubble.duration}s ${bubble.delay}s ease-in-out infinite`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
