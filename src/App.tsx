import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('skills');

  const renderContent = () => {
    switch (activeSection) {
      case 'skills':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Skills 💻</h2>
              <p className="card-description">My technical expertise and tools I work with.</p>
            </div>
            <div className="skill-item">
              <h4>Frontend Development</h4>
              <p>React, TypeScript, Next.js, Tailwind CSS</p>
            </div>
            <div className="skill-item">
              <h4>Backend Development</h4>
              <p>Node.js, Python, PostgreSQL, MongoDB</p>
            </div>
            <div className="skill-item">
              <h4>3D & Design</h4>
              <p>Spline, Three.js, Blender, Figma</p>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Experience 🚀</h2>
              <p className="card-description">My professional journey and achievements.</p>
            </div>
            <div className="experience-item">
              <h4>Senior Developer</h4>
              <p>Led development of innovative web applications using modern technologies.</p>
            </div>
            <div className="experience-item">
              <h4>Full Stack Engineer</h4>
              <p>Built scalable solutions and collaborated with cross-functional teams.</p>
            </div>
            <div className="experience-item">
              <h4>Creative Developer</h4>
              <p>Specialized in interactive 3D experiences and modern UI/UX design.</p>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Projects ⭐</h2>
              <p className="card-description">Some of my favorite work and side projects.</p>
            </div>
            <div className="project-item">
              <h4>3D Portfolio Website</h4>
              <p>Interactive cosmic-themed portfolio built with Spline and React.</p>
            </div>
            <div className="project-item">
              <h4>E-commerce Platform</h4>
              <p>Full-stack application with modern payment integration and admin dashboard.</p>
            </div>
            <div className="project-item">
              <h4>Data Visualization Tool</h4>
              <p>Real-time analytics dashboard with custom charts and interactive elements.</p>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="content-section active">
            <div className="card-header">
              <h2 className="card-title">Contact 📫</h2>
              <p className="card-description">Let's connect and build something amazing together.</p>
            </div>
            <div className="skill-item">
              <h4>Email</h4>
              <p>brandon@example.com</p>
            </div>
            <div className="skill-item">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/brandon</p>
            </div>
            <div className="skill-item">
              <h4>GitHub</h4>
              <p>github.com/brandon</p>
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
