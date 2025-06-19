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
             I'm currently studying at the University of Toronto. I love to build innovative software, and I'm currently interested in Full Stack Development and AI
            </p>
            <p className="section-text">
 When I’m not in school, I’m usually playing and watching basketball and baseball.</p>
          </div>
        );
      case 'skills':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Skills 💻</h2>
              <p className="card-subtitle">My technical expertise and tools I work with.</p>
            </div>
            <p className="section-text">
              <strong>Frontend:</strong> React, TypeScript, Next.js, Vue.js, Tailwind CSS, Three.js, WebGL
            </p>
            <p className="section-text">
              <strong>Backend:</strong> Node.js, Python, Go, PostgreSQL, MongoDB, Redis, GraphQL, REST APIs
            </p>
            <p className="section-text">
              <strong>Tools & DevOps:</strong> Docker, Kubernetes, AWS, Git, CI/CD, Jest, Webpack, Vite
            </p>
            <p className="section-text">
              <strong>Design & 3D:</strong> Spline, Blender, Figma, Adobe Creative Suite, UI/UX Design
            </p>
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
              <strong>Email:</strong> brandon@example.com<br/>
              Feel free to reach out for collaboration opportunities, project discussions, or just to say hello!
            </p>
            <p className="section-text">
              <strong>LinkedIn:</strong> linkedin.com/in/brandon<br/>
              Connect with me for professional networking and career updates.
            </p>
            <p className="section-text">
              <strong>GitHub:</strong> github.com/brandon<br/>
              Check out my open source projects and contributions.
            </p>
            <p className="section-text">
              <strong>Twitter:</strong> @brandon_dev<br/>
              Follow for tech insights, project updates, and industry thoughts.
            </p>
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
