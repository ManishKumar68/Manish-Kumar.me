import { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";
import { useTerminal } from "../hooks/use-terminal";

interface TerminalProps {
  onOpenResume?: () => void;
}

// Memoized command output component for better performance
const CommandOutput = memo(({ command, output }: { command: string; output: string }) => {
  if (command === 'contact') {
    return (
      <div>
        {output.split('\n').map((line: string, lineIndex: number) => {
          // Check if line contains a URL
          const urlMatch = line.match(/(https?:\/\/[^\s]+)/);
          if (urlMatch) {
            const url = urlMatch[1];
            const beforeUrl = line.substring(0, line.indexOf(url));
            const afterUrl = line.substring(line.indexOf(url) + url.length);
            return (
              <div key={lineIndex}>
                {beforeUrl}
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:text-white underline cursor-pointer"
                >
                  {url}
                </a>
                {afterUrl}
              </div>
            );
          }
          return <div key={lineIndex}>{line}</div>;
        })}
      </div>
    );
  }
  
  return <span>{output}</span>;
});

CommandOutput.displayName = 'CommandOutput';

export default function Terminal({ onOpenResume }: TerminalProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { history, executeCommand, clearTerminal } = useTerminal();

  // Memoize navigation commands to prevent unnecessary re-renders
  const navigationCommands = useMemo(() => 
    ['help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership', 'sudo', 'clear'], 
    []
  );

  // Memoize welcome message to prevent re-rendering
  const welcomeMessage = useMemo(() => (
    <>
      <div className="mb-3">
        <span className="text-blue-500 font-mono text-sm font-bold">manish@portfolio:~$</span> 
        <span className="text-green-500 ml-1 font-mono text-sm font-normal">welcome</span>
      </div>
      
      <div className="mb-6 text-gray-200 font-mono text-sm font-normal leading-relaxed">
        hello, I'm Manish Kumar..<br /><br />
        Welcome to my interactive "AI powered" portfolio terminal!<br />
        Type 'help' to see available commands..
      </div>
    </>
  ), []);

  // Optimize scroll behavior with useCallback
  const scrollToBottom = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Optimize command handling with useCallback
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      if (command) {
        if (command.toLowerCase() === 'clear') {
          clearTerminal();
        } else if (command.toLowerCase() === 'resume') {
          onOpenResume?.();
          executeCommand(command);
        } else {
          executeCommand(command);
        }
      }
      setInput('');
    }
  }, [input, clearTerminal, executeCommand, onOpenResume]);

  // Optimize navigation click handling with useCallback
  const handleNavClick = useCallback((command: string) => {
    if (command === 'clear') {
      clearTerminal();
    } else if (command === 'resume') {
      onOpenResume?.();
    } else {
      executeCommand(command);
    }
  }, [clearTerminal, executeCommand, onOpenResume]);

  // Memoize input change handler
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  return (
    <div className="h-full flex flex-col bg-black">
      {/* Navigation Bar */}
      <div className="p-4 pb-3 border-b border-gray-800" data-testid="nav-bar">
        <nav className="text-terminal-green text-sm flex flex-wrap gap-0">
          {navigationCommands.map((cmd, index, array) => (
            <span key={cmd} className="flex items-center">
              <button 
                className="nav-link text-terminal-green hover:text-white transition-colors cursor-pointer font-mono text-sm font-normal"
                onClick={() => handleNavClick(cmd)}
                data-testid={`button-nav-${cmd}`}
              >
                {cmd}
              </button>
              {index < array.length - 1 && <span className="text-gray-600 mx-2">|</span>}
            </span>
          ))}
        </nav>
      </div>
      
      {/* Terminal Content */}
      <div className="flex-1 px-4 pb-4 flex flex-col overflow-hidden">
        {/* Terminal Output */}
        <div 
          ref={outputRef}
          id="terminal-output" 
          className="flex-1 overflow-y-auto scrollbar-hide"
          data-testid="terminal-output"
        >
          {/* Welcome Message */}
          {history.length === 0 && welcomeMessage}
          
          {/* Command History */}
          {history.map((entry: { command: string; output: string }, index: number) => (
            <div key={`${entry.command}-${index}`} className="mb-4">
              <div className="mb-2">
                <span className="text-blue-500 font-mono text-sm font-bold">manish@portfolio:~$</span> 
                <span className="text-green-500 ml-1 font-mono text-sm font-normal">{entry.command}</span>
              </div>
              <div className="text-gray-200 whitespace-pre-line font-mono text-sm font-normal leading-relaxed mb-3" data-testid={`output-${entry.command}`}>
                <CommandOutput command={entry.command} output={entry.output} />
              </div>
            </div>
          ))}
          
          {/* Current Prompt - Always show */}
          <div className="flex items-center">
            <span className="text-blue-500 font-mono text-sm font-bold">manish@portfolio:~$</span> 
            <span className="terminal-cursor ml-1"></span>
          </div>
        </div>
        
        {/* Command Input - Only one at bottom */}
        <div className="flex items-center mt-4 pt-3 border-t border-gray-800" data-testid="input-container">
          <span className="text-blue-500 mr-2 font-mono text-sm font-bold">manish@portfolio:~$</span>
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-green-500 font-mono outline-none flex-1 caret-terminal-green text-sm font-normal"
            placeholder=""
            autoComplete="off"
            spellCheck={false}
            data-testid="input-command"
          />
        </div>
      </div>
    </div>
  );
}
