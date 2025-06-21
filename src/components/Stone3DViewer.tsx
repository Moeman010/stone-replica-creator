
import { useState, useRef, useEffect } from 'react';

const Stone3DViewer = ({ text, fontFamily, fontSize, color }: {
  text: string;
  fontFamily: string;
  fontSize: string;
  color: string;
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const viewerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));

    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="flex justify-center">
      <div 
        ref={viewerRef}
        className="relative w-80 h-96 cursor-grab active:cursor-grabbing"
        style={{ perspective: '1000px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="w-full h-full relative preserve-3d"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {/* Front face */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900 border-4 border-gray-600 flex items-center justify-center rounded-lg shadow-2xl"
            style={{ transform: 'translateZ(20px)' }}
          >
            <div 
              className="text-center p-6 max-w-full break-words"
              style={{
                fontFamily: fontFamily,
                fontSize: `${parseInt(fontSize) * 0.8}px`,
                color: color,
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}
            >
              {text || 'Uw tekst hier...'}
            </div>
          </div>

          {/* Back face */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 border-4 border-gray-700 rounded-lg"
            style={{ transform: 'translateZ(-20px) rotateY(180deg)' }}
          />

          {/* Top face */}
          <div 
            className="absolute inset-0 bg-gray-600 border-2 border-gray-500"
            style={{ 
              transform: 'rotateX(90deg) translateZ(20px)',
              height: '40px',
              top: '-20px'
            }}
          />

          {/* Bottom face */}
          <div 
            className="absolute inset-0 bg-gray-800 border-2 border-gray-700"
            style={{ 
              transform: 'rotateX(-90deg) translateZ(20px)',
              height: '40px',
              bottom: '-20px'
            }}
          />

          {/* Left face */}
          <div 
            className="absolute inset-0 bg-gray-700 border-2 border-gray-600"
            style={{ 
              transform: 'rotateY(-90deg) translateZ(20px)',
              width: '40px',
              left: '-20px'
            }}
          />

          {/* Right face */}
          <div 
            className="absolute inset-0 bg-gray-700 border-2 border-gray-600"
            style={{ 
              transform: 'rotateY(90deg) translateZ(20px)',
              width: '40px',
              right: '-20px'
            }}
          />
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-garden-secondary">
        Klik en sleep om te draaien
      </div>
    </div>
  );
};

export default Stone3DViewer;
