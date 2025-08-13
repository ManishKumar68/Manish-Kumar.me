import { useState, useCallback, useMemo } from "react";

interface TerminalEntry {
  command: string;
  output: string;
}

// Memoized command functions for better performance
const useCommands = () => {
  return useMemo(() => ({
    help: () => `Available commands:
  help          - Show this help message
  about         - Learn more about me
  projects      - View my projects
  skills        - Technical skills
  experience    - Work experience
  contact       - Get in touch
  education     - Educational background
  certifications- Professional certifications
  leadership    - Leadership experience
  sudo          - Admin access (try it!)
  clear         - Clear terminal
  
  Type any command to continue...`,

    // about section
    about: () => `👋 Hello, I'm Manish Kumar!

I'm a College Student With expertise in full-stack development, Other Basic skill's..

Always excited about learning new technologies and solving 
complex problems with elegant solutions.`,

    // Projects section
    projects: () => `Recent Projects

🔧 AI-Powered Portfolio Terminal (Current $ UnderProcess)
   Interactive terminal-style portfolio with 3D elements
   Tech: Three.js, React, Tailwind CSS


📚 SMS LOGIN - School Management System (PHP) | September 2024
  Engineered a full-stack ERP login system using PHP to streamline school operations and data management.
  Integrated real-time grade reporting and analytics for improved academic transparency.
  Implemented secure login and role-based access control,ensuring data privacy and user-specific functionality.
  Automated student record handling, including personal details, academic performance, and attendance tracking.
  Boosted administrative efficiency by digitizing manual processes and centralizing school data.

  
🎮 CONNECT4 GAME - Core Java Project | July 2024 | Trainee at Internshala
  Developed a fully functional Connect4 game using Core Java as part of Internshala's online training.
  Built an interactive GUI using Java Swing/AWT for seamless user experience and gameplay.
  Tested and debugged game mechanics, ensuring smooth performance and accurate rule enforcement.Applied object-oriented programming principles to design game logic, user interaction, and win conditions.


💻 Job Portal App with AI ATS | May 2025
  Built a MERN stack job portal with secure JWT login.
  Integrated AI resume scannerusing NLP for skill-based matching.
  Deployed on Vercel, Render, MongoDB Atlas for cloud scalability.
  Followed Rapid Application Development (RAD) model in a team setup.
  
  
🏫 TECHNICAL COLLEGE OF INDIA | April-May 2023| Varanasi ,UP
  WordPress Development :launched a dynamic college website using WordPress, enhancing online presence and accessibility for students and faculty.
  Designed a mobile-responsive layout to ensure optimal viewing across various devices, increasing engagement and accessibility for users on-the-go.
  Implemented an intuitive navigation system to facilitate easy access to essential information on courses, events, and faculty profiles, improving user experience`,

    // skills section
    skills: () => `🧑‍💻 Technical Skills

Programming Languages:
- javaScript
- Bsic Python
- HTML5/CSS3
- basic java

Frontend Technologies:
- HTML5/CSS3
- JavaScript
  
Backend & Database:
- SQL
- MongoDB

Tools:
- Git/GitHub
- CI/CD (GitHub )`,

    //  experience section
    experience: () => `Professional Experience

Senior Software Engineer | TechCorp Inc. (2022-Present)
  • Led development of microservices architecture serving 100K+ users`,

    // contact section
    contact: () => `Get In Touch

📧 Email:    manishkanojia79@gmail.com
🌐 LinkedIn: https://www.linkedin.com/in/manish-kumar79/
🐙 GitHub:   https://github.com/ManishKumar68
📱 Phone:    +91 8651060667
📍 Location: India

Feel free to reach out for any exciting projects & skill's!`,

    // education section
    education: () => `Education

🎓 Bachelor of Technology in Computer Science | 2023 - 2026
   Gyan Ganga College of Technology (GGCT), Jabalpur (M.P) 
   CGPA: 7.41/10  |  SGPA: 7.51/10

🎓 Diploma in Computer science |2021 - 2023
  Ambition institute of Technology, Varanasi (U.P)
  present: 76.4% | 2155/2826

🏫 Intermediate School | 2018 - 2020
   Bhupesh gupta inter college, Bhabua (Bihar)
    12th: 64.00% | 321/500

🏫 High School | 2016 - 2018
  Nitin Public SEC School, Bhiwadi (Rajasthan)
  10th: 54.00% | 324/600`,

    //  certifications section
    certifications: () => `Certifications With Badges & Training 
✅ International Student Workshop on Data Science using Python| 2024-02-26
✅ Android App Development,Trainings - Internshala |2022
✅ Core Java Developer,Trainings - Internshala |2022

✅ Networking (CCNA) | Cisco Networking Academy
- CCNA: Enterprise Networking, Security, and Automation: 2025-06-13
- CCNA: Switching, Routing, and Wireless Essentials: 2025-06-13
- CCNA: Introduction to Networks: 2025-05-27
- Introduction to Packet Tracer: 2024-06-08

✅ Python Programming | Cisco Networking Academy
- Python Essentials 2: 2025-05-30
- Python Essentials 1: 2025-05-18

✅ Cybersecurity | Cisco Networking Academy
- Network Defense: 2024-12-05
- Introduction to Cybersecurity: 2025-05-13
- Introduction to Cybersecurity: 2024-07-31
- Cybersecurity Essentials: 2024-06-09
- Cybersecurity Essentials: 2023-12-29`,

    //  leadership section
    leadership: () => `Leadership Experience`,
    
    // resume command
    resume: () => `📄 Resume Access

Opening resume in side panel...
Use 'resume' command or click the resume button to view.

Your comprehensive resume is now available in an interactive side panel.
The panel takes up 70% of the screen for optimal viewing experience.`,

    //sudo command 
    sudo: () => `sudo: Access granted. Welcome, administrator.

🔐 SYSTEM STATUS: OPTIMAL
📊 Portfolio views today: ${Math.floor(Math.random() * 200) + 50}
🚀 Uptime: 99.9%
💾 Coffee levels: ████████████ (CRITICAL - PLEASE REFUEL)

⚡ Hidden features unlocked:
   • Konami code detection enabled
   • Matrix rain effect available (type 'matrix')
   • Secret project details accessible

Type 'whoami' to see your access level.`,

    whoami: () => `You are: Visitor
Access Level: Guest
IP: ${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}
Session: ${Math.random().toString(36).substr(2, 9)}
Time: ${new Date().toLocaleTimeString()}

Fun fact: You're one of ${Math.floor(Math.random() * 1000) + 100} visitors today!`,

    matrix: () => `Initiating Matrix sequence...
01001000 01100101 01101100 01101100 01101111 
01010111 01101111 01110010 01101100 01100100
...decoding...
"There is no spoon" - Neo

Just kidding! But wouldn't that be cool? 😄`,

    date: () => new Date().toLocaleString(),

    ls: () => `total 42
drwxr-xr-x  2 manish dev  512 ${new Date().toLocaleDateString()} about/
drwxr-xr-x  3 manish dev  768 ${new Date().toLocaleDateString()} projects/
drwxr-xr-x  2 manish dev  256 ${new Date().toLocaleDateString()} skills/
drwxr-xr-x  4 manish dev 1024 ${new Date().toLocaleDateString()} experience/
-rw-r--r--  1 manish dev 2048 ${new Date().toLocaleDateString()} resume.pdf
-rw-r--r--  1 manish dev  512 ${new Date().toLocaleDateString()} contact.txt`,
  }), []);
};

export function useTerminal() {
  const [history, setHistory] = useState<TerminalEntry[]>([]);
  const commands = useCommands();

  // Memoize command execution for better performance
  const executeCommand = useCallback((command: string) => {
    const cmd = command.trim().toLowerCase();
    const outputFn = commands[cmd as keyof typeof commands];
    
    if (outputFn) {
      const output = outputFn();
      setHistory(prev => [...prev, { command, output }]);
    } else {
      const output = `Command not found: ${command}
Type 'help' for available commands.`;
      setHistory(prev => [...prev, { command, output }]);
    }
  }, [commands]);

  // Memoize clear terminal function
  const clearTerminal = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    history,
    executeCommand,
    clearTerminal,
  };
}
