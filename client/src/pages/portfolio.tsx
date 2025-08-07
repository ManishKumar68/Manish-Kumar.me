import { useEffect } from "react";
import Terminal from "@/components/terminal";
import IdCard from "@/components/id-card";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Manish Kumar - Software Engineer Portfolio";
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-terminal-bg text-white font-mono">
      {/* Left Section - Visual Elements */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 relative">
        {/* Header */}
        <div className="text-center mb-8" data-testid="header-section">
          <h1 className="text-4xl lg:text-6xl font-bold text-terminal-green mb-2" data-testid="text-name">
            Manish Kumar
          </h1>
          <p className="text-xl lg:text-2xl text-white" data-testid="text-title">
            Software Engineer
          </p>
        </div>
        
        {/* 3D Interactive ID Card */}
        <IdCard />
        
        {/* Footer info */}
        <div className="absolute bottom-4 left-4 text-terminal-green text-xs" data-testid="text-prompt-footer">
          manishkumar@portfolio:~$
        </div>
      </div>
      
      {/* Right Section - Terminal Interface */}
      <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col">
        <Terminal />
      </div>
    </div>
  );
}
