import { useState } from "react";

interface TerminalEntry {
  command: string;
  output: string;
}

const commands: Record<string, () => string> = {
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
  clear         - Clear terminal`,

  about: () => `About Manish Kumar
━━━━━━━━━━━━━━━━━━━━
I'm a passionate Software & AI Engineer with 3+ years of experience
in full-stack development and machine learning.

Specializing in:
   • React/Next.js & Node.js development
   • Python/Django backend systems
   • Machine Learning & AI applications
   • Cloud deployment (AWS, GCP)

Always excited about learning new technologies and solving 
complex problems with elegant solutions.`,

  projects: () => `Recent Projects
━━━━━━━━━━━━━━━
🔧 AI-Powered Portfolio Terminal (Current)
   Interactive terminal-style portfolio with 3D elements
   Tech: Three.js, React, Tailwind CSS

🤖 Smart Task Manager
   AI-assisted productivity app with natural language processing
   Tech: Python, OpenAI API, React, PostgreSQL

🌟 E-commerce Analytics Dashboard
   Real-time sales analytics with predictive insights
   Tech: React, D3.js, Python, FastAPI

📊 Social Media Sentiment Analyzer
   ML-powered sentiment analysis for brand monitoring
   Tech: Python, scikit-learn, Flask, Docker

Type 'contact' to discuss collaboration opportunities!`,

  skills: () => `Technical Skills
━━━━━━━━━━━━━━━
Programming Languages:
  ████████████ JavaScript/TypeScript
  ███████████░ Python
  ████████░░░░ Java
  ██████░░░░░░ C++

Frontend Technologies:
  ████████████ React/Next.js
  ██████████░░ HTML5/CSS3
  █████████░░░ Vue.js
  ████████░░░░ Tailwind CSS

Backend & Database:
  ███████████░ Node.js
  ██████████░░ Django/FastAPI
  █████████░░░ PostgreSQL
  ████████░░░░ MongoDB

AI/ML & Cloud:
  ██████████░░ TensorFlow/PyTorch
  █████████░░░ AWS/GCP
  ████████░░░░ Docker/Kubernetes`,

  experience: () => `Professional Experience
━━━━━━━━━━━━━━━━━━━━━━━
Senior Software Engineer | TechCorp Inc. (2022-Present)
  • Led development of microservices architecture serving 100K+ users
  • Implemented CI/CD pipelines reducing deployment time by 60%
  • Mentored junior developers and conducted technical interviews

Full Stack Developer | StartupXYZ (2021-2022)
  • Built responsive web applications using React and Node.js
  • Developed RESTful APIs and integrated third-party services
  • Collaborated with cross-functional teams using Agile methodology

Software Developer Intern | Innovation Labs (2020-2021)
  • Created data visualization dashboards using Python and D3.js
  • Contributed to open-source projects and documentation
  • Participated in hackathons and technical workshops`,

  contact: () => `Get In Touch
━━━━━━━━━━━━━
Email:    manish.kumar.dev@gmail.com
LinkedIn: linkedin.com/in/manishkumar-dev
GitHub:   github.com/manishkumar-dev
Website:  manishkumar.dev
Location: Bangalore, India

Available for:
   • Full-time opportunities
   • Freelance projects
   • Technical consultations
   • Open source collaborations

Feel free to reach out for any exciting projects or opportunities!`,

  education: () => `Education
━━━━━━━━━
🎓 Bachelor of Technology in Computer Science
   XYZ University, 2020
   CGPA: 8.7/10

📚 Relevant Coursework:
   • Data Structures & Algorithms
   • Machine Learning & AI
   • Database Management Systems
   • Software Engineering
   • Computer Networks

🏆 Achievements:
   • Dean's List for 3 consecutive semesters
   • Winner of Inter-college Hackathon 2019
   • Published research paper on ML applications`,

  certifications: () => `Certifications
━━━━━━━━━━━━━━
✅ AWS Certified Solutions Architect (2023)
✅ Google Cloud Professional Developer (2022)
✅ MongoDB Certified Developer (2022)
✅ React Developer Certification - Meta (2021)
✅ Python Data Science Certification - IBM (2021)

🎯 Currently Pursuing:
   • Kubernetes Application Developer (CKA)
   • TensorFlow Developer Certificate`,

  leadership: () => `Leadership Experience
━━━━━━━━━━━━━━━━━━━━━
👥 Tech Lead | Current Company (2023-Present)
   • Leading a team of 5 developers on multiple projects
   • Conducting code reviews and technical decision making
   • Mentoring junior developers and interns

🎤 Community Involvement:
   • Speaker at Local Tech Meetups
   • Open Source Maintainer (3 projects, 500+ stars)
   • Volunteer at coding bootcamps for underserved communities

📖 Knowledge Sharing:
   • Technical blog with 10K+ monthly readers
   • YouTube channel on web development (5K subscribers)
   • Workshop conductor at university tech fests`,

  sudo: () => `sudo: Access granted. Welcome, administrator.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
};

export function useTerminal() {
  const [history, setHistory] = useState<TerminalEntry[]>([]);

  const executeCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    const outputFn = commands[cmd];
    const output = outputFn ? outputFn() : `Command not found: ${command}
Type 'help' for available commands.`;
    
    setHistory(prev => [...prev, { command, output }]);
  };

  const clearTerminal = () => {
    setHistory([]);
  };

  return {
    history,
    executeCommand,
    clearTerminal,
  };
}
