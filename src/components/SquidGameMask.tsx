
import { useEffect, useState } from 'react';

const SquidGameMask = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate rotation based on mouse position relative to center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-30 transition-all duration-300 ease-out"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      {/* Master Mask SVG */}
      <div className="w-24 h-24 opacity-20 hover:opacity-40 transition-opacity duration-500">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Mask face */}
          <circle cx="50" cy="50" r="40" fill="#FF6B9D" stroke="#000" strokeWidth="2"/>
          
          {/* Eyes */}
          <circle cx="35" cy="40" r="6" fill="#000"/>
          <circle cx="65" cy="40" r="6" fill="#000"/>
          
          {/* Geometric shapes on forehead */}
          <polygon points="50,25 45,35 55,35" fill="#000"/>
          
          {/* Mouth line */}
          <line x1="40" y1="65" x2="60" y2="65" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

export default SquidGameMask;
