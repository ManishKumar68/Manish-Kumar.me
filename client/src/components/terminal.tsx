import { useState, useRef, useEffect } from "react";
import { useTerminal } from "@/hooks/use-terminal";

export default function Terminal() {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { history, executeCommand, clearTerminal } = useTerminal();

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      if (command) {
        if (command.toLowerCase() === 'clear') {
          clearTerminal();
        } else {
          executeCommand(command);
        }
      }
      setInput('');
    }
  };

  const handleNavClick = (command: string) => {
    if (command === 'clear') {
      clearTerminal();
    } else {
      executeCommand(command);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="mb-6" data-testid="nav-bar">
        <nav className="text-terminal-green text-sm flex flex-wrap gap-2">
          {['help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership', 'sudo', 'clear'].map((cmd, index, array) => (
            <span key={cmd} className="flex items-center">
              <button 
                className="nav-link hover:bg-gray-800 px-2 py-1 rounded transition-colors cursor-pointer"
                onClick={() => handleNavClick(cmd)}
                data-testid={`button-nav-${cmd}`}
              >
                {cmd}
              </button>
              {index < array.length - 1 && <span className="text-gray-500 ml-2">|</span>}
            </span>
          ))}
        </nav>
      </div>
      
      {/* Terminal Output */}
      <div 
        ref={outputRef}
        id="terminal-output" 
        className="flex-1 overflow-y-auto scrollbar-hide"
        data-testid="terminal-output"
      >
        {/* Welcome Message */}
        {history.length === 0 && (
          <>
            <div className="terminal-line mb-4" style={{ animationDelay: '0.5s' }}>
              <span className="text-terminal-green">manishkumar@portfolio:~$</span> 
              <span className="text-white">welcome</span>
            </div>
            
            <div className="terminal-line mb-4 text-white" style={{ animationDelay: '1s' }}>
              Hi, I'm Manish Kumar, a Software & AI Engineer.<br /><br />
              Welcome to my interactive "AI powered" portfolio terminal!<br />
              Type 'help' to see available commands.
            </div>
          </>
        )}
        
        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <span className="text-terminal-green">manishkumar@portfolio:~$</span> 
              <span className="text-white ml-1">{entry.command}</span>
            </div>
            <div className="text-white whitespace-pre-line" data-testid={`output-${entry.command}`}>
              {entry.output}
            </div>
          </div>
        ))}
        
        {/* Current Prompt */}
        <div className="terminal-line" style={{ animationDelay: '1.5s' }}>
          <span className="text-terminal-green">manishkumar@portfolio:~$</span> 
          <span className="terminal-cursor"></span>
        </div>
      </div>
      
      {/* Command Input */}
      <div className="flex items-center mt-4" data-testid="input-container">
        <span className="text-terminal-green mr-2">manishkumar@portfolio:~$</span>
        <input 
          ref={inputRef}
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent text-white font-mono outline-none flex-1 caret-terminal-green"
          placeholder=""
          autoComplete="off"
          spellCheck={false}
          data-testid="input-command"
        />
      </div>
    </>
  );
}
