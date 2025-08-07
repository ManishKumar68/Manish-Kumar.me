import { useEffect } from "react";
import Terminal from "../components/terminal";
import IdCard from "../components/id-card";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Manish Kumar - Software Engineer Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Full Layout Container */}
      <div className="flex h-screen">
        {/* Left Section - Visual Elements */}
        <div className="w-1/2 flex flex-col relative border-r border-gray-800">
          {/* Header Section */}
          <div className="p-6 border-b border-gray-800" data-testid="header-section">
            <h1 className="text-2xl font-bold text-terminal-green mb-1" data-testid="text-name">
              Manish Kumar
            </h1>
            <p className="text-sm text-gray-300" data-testid="text-title">
              Software Engineer
            </p>
          </div>
          
          {/* Main Image/Card Section */}
          <div className="flex-1 flex items-center justify-center p-8">
            <IdCard />
          </div>
          
          {/* Footer Section */}
          <div className="p-4 border-t border-gray-800">
            <div className="text-terminal-green text-sm font-mono" data-testid="text-prompt-footer">
              manishkumar@portfolio:~$
            </div>
          </div>
        </div>
        
        {/* Right Section - Terminal Interface */}
        <div className="w-1/2 flex flex-col bg-black">
          <div className="h-full p-4 flex flex-col">
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
}
