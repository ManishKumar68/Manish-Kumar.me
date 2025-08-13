import { useRef, useEffect, useCallback, memo } from "react";
import manishHeadshot from "../assets/manish-headshot.png";

const IdCard = memo(() => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Optimize mouse move handler with useCallback and throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    // Throttle the transform updates for better performance
    requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Optimize calculations and reduce transform complexity
      const rotateX = Math.min(Math.max((y - centerY) / 50, -10), 10);
      const rotateY = Math.min(Math.max((centerX - x) / 3, -15), 15);
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
  }, []);

  // Optimize mouse leave handler
  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    }
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Use passive event listeners for better performance
    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div className="relative" data-testid="card-container">
      {/* Professional ID Card */}
      <div 
        ref={cardRef}
        className="relative bg-gray-900 border border-gray-600 rounded-lg w-72 h-44 p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-2xl will-change-transform"
        data-testid="card-3d"
        style={{
          background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
          boxShadow: '0 10px 30px rgba(0, 255, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          backfaceVisibility: 'hidden', // Optimize 3D transforms
          perspective: '1000px'
        }}
      >
          {/* Card Content */}
          <div className="flex h-full">
            {/* Left Side - Photo */}
            <div className="flex-shrink-0 mr-4">
              <img 
                src={manishHeadshot}
                alt="Manish Kumar professional headshot"
                className="w-20 h-24 rounded object-cover border border-gray-500"
                data-testid="img-headshot"
                loading="eager" // Prioritize loading for better UX
              />
            </div>
            
            {/* Right Side - Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="text-white text-lg font-bold mb-1" data-testid="text-card-name">
                  MANISH KUMAR
                </div>
                <div className="text-gray-300 text-xs font-normal mb-3" data-testid="text-card-title">
                  Student | 4th Year<br />
                  B.Tech | Computer Science & Engineering
                </div>
              </div>
              
              <div className="flex items-end justify-between">
                <div className="text-terminal-green text-xs font-mono" data-testid="text-card-website">
                  Gyan Ganga College Of Technology (GGCT) | Jabalpur | M.P.
                </div>
                
                {/* Logo */}
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg" data-testid="logo-initial">
                  M
                </div>
              </div>
            </div>
          </div>

      </div>
      
    </div>
  );
});

IdCard.displayName = 'IdCard';

export default IdCard;