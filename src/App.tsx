import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Brandon's Tai</h2>
              <p className="card-subtitle">Software Engineer | CS @ University of Toronto</p>
            </div>
            <p className="section-text">
             I'm currently studying at the University of Toronto. Lately, I've been focused on full stack development and exploring how AI can bring new innovative solutions.
            </p>
            <p className="section-text">
 When I'm not in school, I'm usually watching the Toronto Raptors and the Toronto Blue Jays.</p>
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
                <span className="skill-pill primary">JavaScript</span>
                <span className="skill-pill primary">Python</span>
                <span className="skill-pill primary">TypeScript</span>
                <span className="skill-pill secondary">Java</span>
                <span className="skill-pill secondary">C</span>
                <span className="skill-pill secondary">Kotlin</span>
                <span className="skill-pill tertiary">Lua</span>
                <span className="skill-pill tertiary">PHP</span>
                <span className="skill-pill secondary">SQL</span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Frameworks & Libraries</h3>
              <div className="skills-pills">
                <span className="skill-pill primary">React</span>
                <span className="skill-pill primary">Node.js</span>
                <span className="skill-pill primary">Express.js</span>
                <span className="skill-pill secondary">Next.js</span>
                <span className="skill-pill secondary">Vue.js</span>
                <span className="skill-pill secondary">FastAPI</span>
                <span className="skill-pill tertiary">LangChain</span>
                <span className="skill-pill tertiary">LangGraph</span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Tools & Technologies</h3>
              <div className="skills-pills">
                <span className="skill-pill primary">Git</span>
                <span className="skill-pill primary">MongoDB</span>
                <span className="skill-pill secondary">Docker</span>
                <span className="skill-pill secondary">AWS</span>
                <span className="skill-pill secondary">Firebase</span>
                <span className="skill-pill secondary">Azure</span>
                <span className="skill-pill tertiary">Neo4j</span>
                <span className="skill-pill tertiary">Postman</span>
                <span className="skill-pill tertiary">Render</span>
                <span className="skill-pill tertiary">Bash</span>
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
            <p className="section-text">
              <strong>Senior Software Engineer @ TechCorp</strong><br/>
              Led development of high-performance web applications serving 100k+ users. Architected microservices infrastructure 
              and mentored junior developers in modern development practices.
            </p>
            <p className="section-text">
              <strong>Full Stack Developer @ StartupXYZ</strong><br/>
              Built the entire product from ground up using React and Node.js. Implemented real-time features, 
              payment systems, and scalable backend architecture.
            </p>
            <p className="section-text">
              <strong>Freelance Developer</strong><br/>
              Worked with various clients to create custom web solutions, from e-commerce platforms to 
              interactive 3D experiences. Specialized in performance optimization and modern UI design.
            </p>
          </div>
        );
      case 'projects':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Projects ⭐</h2>
              <p className="card-subtitle">Some of my favorite work and side projects.</p>
            </div>
            <p className="section-text">
              <strong>Cosmic Portfolio</strong> - This interactive 3D portfolio you're currently viewing! Built with 
              React, TypeScript, and Spline for the stunning space background.
            </p>
            <p className="section-text">
              <strong>CloudSync Platform</strong> - A real-time collaboration platform with file sharing, 
              video calls, and project management. Built with React, WebRTC, and WebSocket technology.
            </p>
            <p className="section-text">
              <strong>AI Art Generator</strong> - Machine learning-powered art creation tool with custom neural networks. 
              Features real-time generation and style transfer capabilities.
            </p>
            <p className="section-text">
              <strong>Open Source Contributions</strong> - Active contributor to React ecosystem, 
              with packages downloaded 50k+ times monthly.
            </p>
          </div>
        );
      case 'contact':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Contact 📫</h2>
              <p className="card-subtitle">Let's connect and build something amazing together.</p>
            </div>
            <p className="section-text">
              I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a chat about technology and development.
            </p>
            <div className="contact-links">
              <a 
                href="https://linkedin.com/in/brandon" 
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
                href="https://github.com/brandon" 
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

  return (
    <>
      <Spline 
        scene="https://prod.spline.design/rhOvjkTN2GFBt0uz/scene.splinecode" 
        className="spline"
      />
      
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
    </>
  );
}
