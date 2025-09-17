import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import './App.css';
import { 
  FaPython, FaJava, FaPhp, FaReact, FaNodeJs, FaVuejs, FaGitAlt, FaDocker, FaAws, FaLink, FaWindows, FaExpand, FaTimes
} from 'react-icons/fa';
import { 
  SiTypescript, SiKotlin, SiLua, SiExpress, SiNextdotjs, SiFastapi, 
  SiMongodb, SiFirebase, SiNeo4J, SiPostman, SiRender, SiGnubash, SiC
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io5';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', alt: '' });

  const projects = [
   
    {
      name: "Gagggle",
      description: "Built AI whiteboard with Next.js and React that generates sticky notes from prompts, branches ideas into sub-concepts, and merges thoughts using Groq LLM API and OpenAI API. Developed Express.js backend with LangChain and LangGraph for AI workflows, Socket.io for real-time collaboration with live cursors and team editing.",
      techStack: ["React", "Next.js", "Express.js", "LangChain", "LangGraph", "Groq LLM API", "OpenAI API", "Socket.io"],
      githubLink: "https://github.com/BrandonT310442/Gagggle",
      demoLink: "https://devpost.com/software/gagggle",
      imagePath: "/gagggle.gif"
    },
    {
      name: "Qnect",
      description: "An AI powered blind dating app that uses LLMs to match users based on interests and preferences.",
      techStack: ["Vue.js", "Node.js", "MongoDB", "Express.js", "Groq LLM API", "Imentiv API"],
      githubLink: "https://github.com/fredh2006/qnect",
      demoLink: "https://www.youtube.com/watch?v=k2-dmvFxZMg",
      imagePath: "/qnect.png"
    },
    {
      name: "Comet",
      description: "Comet is a Chrome extension that brings the power of AI-assisted editing to Overleaf, similar to how Cursor revolutionized code editing. Simply describe your LaTeX changes in natural language, and watch as Comet generates and applies precise LaTeX code directly to your Overleaf documents.",
      techStack: ["Vue.js", "LangChain", "LangGraph", "DeepSeek V3", "Express.js", "Supabase", "Chrome Extension API"],
      githubLink: "https://github.com/BrandonT310442/Comet-Extension",
      imagePath: "/Comet Extension.png"
    },
    {
      name: "Vortex AI",
      description: "A mobile AI app that combines language and image models into one easy to use mobile application. Utilizes the Groq API and StableDiffusion API.",
      techStack: ["React Native", "ExpoGo", "Groq LLM API", "StableDiffusion API"],
      githubLink: "https://github.com/BrandonT310442/VortexAI2",
      imagePath: "/Vortex4.png"
    },
    {
      name: "FRC Data Analytics App",
      description: "A app designed for the FRC 2024 Crescendo Season that analyzes robot performance data to help teams make strategic alliance selections.",
      techStack: ["Express", "MongoDB", "Node.js"],
      demoLink: "https://crescendoscoutingapp.onrender.com/",
      imagePath: "/FRC.png"
    },
    {
      name: "Vendoza Marketplace",
      description: "A comprehensive online marketplace platform where users can buy and sell items with integrated chat functionality and secure user authentication.",
      techStack: ["Passport.js", "Vue.js", "Express.js", "MongoDB", "Node.js"],
      githubLink: "https://github.com/RayhanMamdani/WebStackApp",
      imagePath: "/Vendoza.png"
    },
    {
      name: "Tration",
      description: "A Chrome extension that helps people with dyslexia read more effectively. Features dyslexia-friendly fonts, ad-blocker, color customization, letter spacing adjustment, text-to-speech, and a built-in dictionary.",
      techStack: ["HTML", "CSS", "JavaScript", "Chrome Extension API"],
      demoLink: "https://devpost.com/software/tration",
      imagePath: "/Tration.png"
    }
  ];

  const getProjectPreview = (projectName: string) => {
    switch (projectName) {
      case "Comet":
        return "The Cursor for Overleaf. AI-powered LaTeX editing";
      case "Gagggle":
        return "AI whiteboard for collaborative brainstorming";
      case "Qnect":
        return "AI-powered blind dating app with intelligent matching";
      case "Vortex AI":
        return "Mobile AI app combining language and image models";
      case "FRC Data Analytics App":
        return "Robot performance analytics for strategic decisions";
      case "Vendoza Marketplace":
        return "Comprehensive marketplace platform for buying and selling";
      case "Tration":
        return "Chrome extension helping people with dyslexia read better";
      default:
        return "Innovative software project";
    }
  };

  const handleImageExpand = (imageSrc: string, imageAlt: string) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="content-section active">
            <div className="card-header">
              <div className="name-time-container">
                <h2 className="card-title">Brandon Tai</h2>
                <div className="current-time">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour12: false, 
                    hour: '2-digit', 
                    minute: '2-digit',
                    timeZone: 'America/Toronto'
                  })}
                  <span className="timezone">EST</span>
                </div>
              </div>
              <p className="card-subtitle">Software Engineer | CS @ University of Toronto</p>
            </div>
            <p className="section-text">
            Hi, my name is Brandon! I love to <strong>build</strong>. Whether it's at hackathons (won 6 so far!) or turning ideas into products people actually use. I recently built Comet, bringing AI-powered editing to Overleaf. I turn <strong>"wouldn't it be cool if..."</strong> moments into working code.
</p>
            <p className="section-text">
 When I'm not coding, you'll catch me watching the <strong>Raptors</strong> or <strong>Blue Jays</strong>!</p>
          </div>
        );
      case 'skills':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Skills 💻</h2>
              <p className="card-subtitle">My technical expertise and tools I work with.</p>
            </div>
            
            <div className="skills-category">
              <h3 className="skills-category-title">Languages</h3>
              <div className="skills-pills">
                <span className="skill-pill primary">
                  <span className="skill-icon"><IoLogoJavascript /></span>
                  JavaScript
                </span>
                <span className="skill-pill primary">
                  <span className="skill-icon"><FaPython /></span>
                  Python
                </span>
                <span className="skill-pill primary">
                  <span className="skill-icon"><SiTypescript /></span>
                  TypeScript
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><FaJava /></span>
                  Java
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><SiC /></span>
                  C
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><SiKotlin /></span>
                  Kotlin
                </span>
                <span className="skill-pill tertiary">
                  <span className="skill-icon"><SiLua /></span>
                  Lua
                </span>
                <span className="skill-pill tertiary">
                  <span className="skill-icon"><FaPhp /></span>
                  PHP
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><TbSql /></span>
                  SQL
                </span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Frameworks & Libraries</h3>
              <div className="skills-pills">
                <span className="skill-pill primary">
                  <span className="skill-icon"><FaReact /></span>
                  React
                </span>
                <span className="skill-pill primary">
                  <span className="skill-icon"><FaNodeJs /></span>
                  Node.js
                </span>
                <span className="skill-pill primary">
                  <span className="skill-icon"><SiExpress /></span>
                  Express.js
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><SiNextdotjs /></span>
                  Next.js
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><FaVuejs /></span>
                  Vue.js
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><SiFastapi /></span>
                  FastAPI
                </span>
                <span className="skill-pill tertiary">
                  <span className="skill-icon"><FaLink /></span>
                  LangChain
                </span>
                <span className="skill-pill tertiary">
                  <span className="skill-icon"><FaLink /></span>
                  LangGraph
                </span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Tools & Technologies</h3>
              <div className="skills-pills">
                <span className="skill-pill primary">
                  <span className="skill-icon"><FaGitAlt /></span>
                  Git
                </span>
                <span className="skill-pill primary">
                  <span className="skill-icon"><SiMongodb /></span>
                  MongoDB
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><FaDocker /></span>
                  Docker
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><FaAws /></span>
                  AWS
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><SiFirebase /></span>
                  Firebase
                </span>
                <span className="skill-pill secondary">
                  <span className="skill-icon"><FaWindows /></span>
                  Azure
                </span>
                <span className="skill-pill tertiary">
                  <span className="skill-icon"><SiNeo4J /></span>
                  Neo4j
                </span>
                <span className="skill-pill tertiary">
                  <span className="skill-icon"><SiPostman /></span>
                  Postman
                </span>
                <span className="skill-pill tertiary">
                  <span className="skill-icon"><SiRender /></span>
                  Render
                </span>
                <span className="skill-pill tertiary">
                  <span className="skill-icon"><SiGnubash /></span>
                  Bash
                </span>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Experience 🚀</h2>
              <p className="card-subtitle">My professional journey and achievements.</p>
            </div>
            
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">Applied AI/Software Engineer Intern</div>
                  <div className="experience-company">Sentri AI</div>
                  <div className="experience-date">May 2025 - Present</div>
                </div>
                <div className="experience-description">
                  Designed and implemented an automated answering pipeline using <span className="tech-highlight">LangGraph</span>, achieving 95% accuracy in security compliance responses. Built scalable full-stack features with <span className="tech-highlight">React</span>, <span className="tech-highlight">Next.js</span>, <span className="tech-highlight">Python</span>, and <span className="tech-highlight">FastAPI</span>.
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">AI Research Assistant/Software Engineer Intern</div>
                  <div className="experience-company">American Society for Radiation Oncology (ASTRO)</div>
                  <div className="experience-date">Mar 2025 - May 2025</div>
                </div>
                <div className="experience-description">
                  Developed a full-stack study guide platform using <span className="tech-highlight">React</span>, <span className="tech-highlight">Next.js</span>, and <span className="tech-highlight">Supabase</span>, used by <span className="tech-highlight">500+ students</span> annually for exam prep and review. Co-authored a paper (publication pending) with top university researchers, evaluating <span className="tech-highlight">LLM accuracy</span> on <span className="tech-highlight">250+</span> study guide questions.
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">Founding Engineer</div>
                  <div className="experience-company">Stryde Health</div>
                  <div className="experience-date">Feb 2025 - Present</div>
                </div>
                <div className="experience-description">
                  Developed patient app and clinician dashboard to enhance accessibility for stroke survivors; built using <span className="tech-highlight">React</span>, <span className="tech-highlight">Spring Boot</span>, and <span className="tech-highlight">AWS PostgreSQL</span> backend (entering trial at SHN in August). Integrated AI-powered recovery insights and used <span className="tech-highlight">LLMs</span> to generate cognition tests within the clinician dashboard, contributing to a <span className="tech-highlight">15% increase</span> in patient adherence.
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">Full Stack Software Engineer</div>
                  <div className="experience-company">UofT Blueprint</div>
                  <div className="experience-date">Sep 2024 - Mar 2025</div>
                </div>
                <div className="experience-description">
                  Developed <span className="tech-highlight">Kotlin</span> Android menstrual tracker (200+ users) with <span className="tech-highlight">Firebase</span> integration. Collaborated with 12-person team using MVVM architecture.
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">Lead Software Engineer</div>
                  <div className="experience-company">FIRST Robotics Team 7558</div>
                  <div className="experience-date">Sep 2022 - Jun 2024</div>
                </div>
                <div className="experience-description">
                  Built full-stack analytics app using <span className="tech-highlight">MongoDB</span>, <span className="tech-highlight">Express.js</span>, <span className="tech-highlight">Vue.js</span>, and <span className="tech-highlight">Node.js</span> for robot performance analysis (250+ users).
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">Supply Chain Management Intern</div>
                  <div className="experience-company">Qvella</div>
                  <div className="experience-date">Jun 2023 - Aug 2023</div>
                </div>
                <div className="experience-description">
                  Streamlined Bill of Materials analysis and performed warehouse inventory audits, optimizing procurement efficiency and minimizing excess stock.
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects': {
        if (showProjectDetail) {
          const currentProject = projects[currentProjectIndex];
          return (
            <div className="content-section active">
              <div className="project-detail-header">
                <button 
                  onClick={() => setShowProjectDetail(false)}
                  className="back-button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                  </svg>
                  Back to Projects
                </button>
              </div>
              
              <div className="project-detail">
                <div className="project-image" onClick={() => handleImageExpand(currentProject.imagePath, currentProject.name)}>
                  <img src={currentProject.imagePath} alt={currentProject.name} />
                  <div className="project-image-expand" onClick={(e) => {
                    e.stopPropagation();
                    handleImageExpand(currentProject.imagePath, currentProject.name);
                  }}>
                    <FaExpand />
                  </div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-title">{currentProject.name}</h3>
                  <p className="project-description">{currentProject.description}</p>
                  
                  <div className="project-tech-stack">
                    {currentProject.techStack.map((tech, index) => (
                      <span key={index} className="project-tech-pill">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {currentProject.githubLink && (
                      <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {currentProject.demoLink && (
                      <a href={currentProject.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                        </svg>
                        {currentProject.demoLink.includes('youtube') ? 'Demo' : 'Live Demo'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }
        
        // Project List View
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Projects ⭐</h2>
              <p className="card-subtitle">Some of my favourite work and side projects.</p>
            </div>
            
            <div className="project-list-container">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentProjectIndex(index);
                    setShowProjectDetail(true);
                  }}
                  className="project-list-item"
                >
                  <div className="project-list-content">
                    <div className="project-list-header">
                      <span className="project-list-name">{project.name}</span>
                      <span className="project-list-preview">{getProjectPreview(project.name)}</span>
                    </div>
                  </div>
                  <div className="project-list-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      }
      case 'contact':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Contact 📫</h2>
              <p className="card-subtitle">Let's connect and build something amazing together.</p>
            </div>
            <div className="contact-links">
              <a 
                href="mailto:brandon.tai@mail.utoronto.ca"
                className="contact-link email"
              >
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-title">Email</span>
                  <span className="contact-description">Send me a message</span>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/brandon-t-041939226/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link linkedin"
              >
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-title">LinkedIn</span>
                  <span className="contact-description">Connect with me professionally</span>
                </div>
              </a>
              <a 
                href="https://github.com/BrandonT310442" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link github"
              >
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-title">GitHub</span>
                  <span className="contact-description">Check out my projects and code</span>
                </div>
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSplineLoad = () => {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const handleSplineError = () => {
    console.error('Failed to load Spline scene');
    setLoadingError(true);
    // Still hide loading screen even if Spline fails
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Add timeout fallback in case Spline never loads
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn('Spline loading timeout - proceeding without 3D scene');
        setLoadingError(true);
        setIsLoading(false);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [isLoading]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {!loadingError && (
        <Spline 
          scene="https://prod.spline.design/rhOvjkTN2GFBt0uz/scene.splinecode" 
          className="spline"
          onLoad={handleSplineLoad}
          onError={handleSplineError}
        />
      )}
      
      {loadingError && (
        <div className="fallback-background"></div>
      )}

      {isLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-logo">
              <div className="loading-initials">BT</div>
            </div>
            <div className="loading-text">
              <h2 className="loading-title">Brandon Tai</h2>
              <p className="loading-subtitle">Software Engineer</p>
            </div>
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
            <p className="loading-message">Loading experience...</p>
          </div>
        </div>
      )}
      
      <div className="portfolio-card">
        <div className="nav-buttons">
          <button 
            className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About
          </button>
          <button 
            className={`nav-button ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button 
            className={`nav-button ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button 
            className={`nav-button ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </button>
        </div>
        
        <div className="card-content">
          {renderContent()}
        </div>
      </div>

      <div className="credit-badge">
        made with ❤️
      </div>

      {showImageModal && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>
              <FaTimes />
            </button>
            <img 
              src={modalImage.src} 
              alt={modalImage.alt} 
              className="image-modal-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
