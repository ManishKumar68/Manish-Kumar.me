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
      <div 
        ref={cardRef}
        className="card-3d id-card rounded-xl p-4 w-64 h-40 relative animate-card-float cursor-pointer"
        data-testid="card-3d"
      >
        {/* Card Content */}
        <div className="flex items-start h-full">
          <div className="flex-shrink-0 mr-3">
            {/* Professional headshot */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=180" 
              alt="Manish Kumar professional headshot" 
              className="w-16 h-20 rounded-md object-cover border border-gray-400"
              data-testid="img-headshot"
            />
          </div>
          <div className="flex-1">
            <div className="text-white text-xs font-bold mb-1" data-testid="text-card-name">
              MANISH KUMAR
            </div>
            <div className="text-gray-300 text-xs mb-2" data-testid="text-card-title">
              Software Engineer
            </div>
            <div className="text-terminal-green text-xs font-mono" data-testid="text-card-website">
              manishkumar.dev
            </div>
            <div className="absolute bottom-3 right-3">
              <div className="w-6 h-6 bg-terminal-green rounded-full flex items-center justify-center text-black font-bold text-xs" data-testid="logo-initial">
                M
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lanyard */}
      <div className="lanyard w-0.5 h-12 mx-auto mt-2" data-testid="lanyard"></div>
      
      {/* Interactive Label */}
      <div className="text-center mt-2">
        <span className="text-terminal-green text-xs" data-testid="text-interactive-label">
          [Interactive 3D Card]
        </span>
      </div>
    </div>
  );
}