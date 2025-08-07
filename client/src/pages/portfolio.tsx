import { useEffect } from "react";
import Terminal from "../components/terminal";
import IdCard from "../components/id-card";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Manish Kumar - Software Engineer Portfolio";
  }, []);

  return (
    <div className="flex min-h-screen bg-terminal-bg text-white font-mono">
      {/* Left Section - Visual Elements */}
      <div className="w-1/2 flex flex-col items-center justify-start p-6 relative border-r border-gray-800">
        {/* Header */}
        <div className="text-left w-full mb-8" data-testid="header-section">
          <h1 className="text-2xl font-bold text-terminal-green mb-1" data-testid="text-name">
            Manish Kumar
          </h1>
          <p className="text-sm text-white" data-testid="text-title">
            Software Engineer
          </p>
        </div>
        
        {/* 3D Interactive ID Card */}
        <div className="mt-8">
          <IdCard />
        </div>
        
        {/* Footer info */}
        <div className="absolute bottom-4 left-4 text-terminal-green text-xs" data-testid="text-prompt-footer">
          manishkumar@portfolio:~$
        </div>
      </div>
      
      {/* Right Section - Terminal Interface */}
      <div className="w-1/2 p-4 flex flex-col">
        <Terminal />
      </div>
    </div>
  );
}
