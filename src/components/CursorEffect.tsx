
import { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor effect */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
            {/*
            <img
             src="public/Adobe Express - file.png" // Place your image in the public folder
                   alt="Custom Cursor"
                   className="w-6 h-6"
                   draggable={false}
            />
            */ }
         <div className="w-6 h-6 bg-pink-500/30 rounded-full blur-sm"></div> 
      </div>

      {/* Secondary cursor effect */}
      {/*<div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      >
        <div className="w-10 h-10 border border-pink-500/20 rounded-full"></div>
      </div>*/}
    </>
  );
};

export default CursorEffect;
