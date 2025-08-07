import { useEffect } from "react";
import Terminal from "../components/terminal";
import IdCard from "../components/id-card";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Manish Kumar - Software Engineer Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Left Section - Visual Elements */}
        <div className="w-1/2 flex flex-col relative">
          {/* Header Section */}
          <div className="p-6" data-testid="header-section">
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
          <div className="p-6">
            <div className="text-terminal-green text-sm font-mono" data-testid="text-prompt-footer">
              manishkumar@portfolio:~$
            </div>
          </div>
        </div>
        
        {/* Right Section - Terminal Interface */}
        <div className="w-1/2 bg-black border-l border-gray-800">
          <Terminal />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-terminal-green mb-1">
            Manish Kumar
          </h1>
          <p className="text-sm text-gray-300">
            Software Engineer
          </p>
        </div>
        
        {/* Mobile Card */}
        <div className="p-4 flex justify-center border-b border-gray-800">
          <div className="scale-75">
            <IdCard />
          </div>
        </div>
        
        {/* Mobile Terminal */}
        <div className="flex-1">
          <Terminal />
        </div>
      </div>
    </div>
  );
}
