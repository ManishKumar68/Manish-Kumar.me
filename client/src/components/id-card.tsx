import { useRef, useEffect } from "react";

export default function IdCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative" data-testid="card-container">
      {/* Professional ID Card */}
      <div 
        ref={cardRef}
        className="relative bg-gray-900 border border-gray-600 rounded-lg w-72 h-44 p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-2xl"
        data-testid="card-3d"
        style={{
          background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
          boxShadow: '0 10px 30px rgba(0, 255, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Card Content */}
        <div className="flex h-full">
          {/* Left Side - Photo */}
          <div className="flex-shrink-0 mr-4">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=150" 
              alt="Manish Kumar professional headshot" 
              className="w-20 h-24 rounded object-cover border border-gray-500"
              data-testid="img-headshot"
            />
          </div>
          
          {/* Right Side - Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="text-white text-sm font-bold mb-1" data-testid="text-card-name">
                MANISH KUMAR
              </div>
              <div className="text-gray-300 text-xs mb-3" data-testid="text-card-title">
                Software Engineer
              </div>
            </div>
            
            <div className="flex items-end justify-between">
              <div className="text-terminal-green text-xs font-mono" data-testid="text-card-website">
                manishkumar.dev
              </div>
              
              {/* Logo */}
              <div className="w-8 h-8 bg-terminal-green rounded-full flex items-center justify-center text-black font-bold text-sm" data-testid="logo-initial">
                M
              </div>
            </div>
          </div>
        </div>
        
        {/* Lanyard hole */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-gray-700 rounded-full border border-gray-500"></div>
      </div>
      
      {/* Lanyard */}
      <div className="flex justify-center mt-3">
        <div className="w-1 h-16 bg-gray-700 rounded-full" data-testid="lanyard"></div>
      </div>
      
      {/* Interactive Label */}
      <div className="text-center mt-3">
        <span className="text-terminal-green text-xs font-mono" data-testid="text-interactive-label">
          [Interactive 3D Card]
        </span>
      </div>
    </div>
  );
}