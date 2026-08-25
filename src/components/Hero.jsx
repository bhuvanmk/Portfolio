import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FiDownload, FiFolder, FiMail, FiLinkedin, FiGithub, FiTerminal, FiUser, FiCheckCircle } from 'react-icons/fi';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('whoami');

  return (
    <section id="home" className="section hero-section" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Recruiter Pitch & Quick Facts */}
          <div>
            {/* Status Pill */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="badge badge-emerald">
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-emerald)',
                    boxShadow: '0 0 8px var(--accent-emerald)',
                    display: 'inline-block'
                  }}
                ></span>
                {personalInfo.status}
              </span>
            </div>

            {/* Name Heading */}
            <h1 style={{ marginBottom: '0.5rem', fontWeight: '800' }}>
              Hi, I'm <span style={{ color: 'var(--accent-cyan)' }}>{personalInfo.name}</span>
            </h1>

            {/* Role Subtitle */}
            <h2
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: 'var(--text-main)',
                fontWeight: '600',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}
            >
              <span>{personalInfo.primaryRole}</span>
              <span style={{ color: 'var(--text-dim)' }}>|</span>
              <span style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Java · Python · AI
              </span>
            </h2>

            {/* Concise Pitch */}
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.75rem', maxWidth: '580px' }}>
              Computer Science & Engineering graduate (CGPA 8.5) from Yenepoya Institute of Technology. Experienced in building full-stack applications with <strong>Java Spring Boot</strong>, <strong>Python</strong>, <strong>FastAPI</strong>, <strong>React</strong>, and <strong>Applied AI (RAG & NLP)</strong> systems.
            </p>

            {/* Primary Action CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <FiFolder />
                <span>View Projects</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FiDownload />
                <span>Download Resume</span>
              </a>

              <a href="#contact" className="btn btn-outline">
                <FiMail />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Credibility & Social Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                CONNECT:
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '1.1rem',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <FiLinkedin />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '1.1rem',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <FiGithub />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Contact"
                  title="Email"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '1.1rem',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Terminal Inspector & Zoomed Profile Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Interactive Terminal Window */}
            <div
              className="terminal-window"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-accent)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {/* Terminal Header / Controls */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FiTerminal style={{ color: 'var(--accent-cyan)' }} />
                  <span>bhuvan.config.sys</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div
                style={{
                  display: 'flex',
                  borderBottom: '1px solid var(--border-subtle)',
                  background: 'rgba(0,0,0,0.1)'
                }}
              >
                {['whoami', 'stack', 'status'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      flex: 1,
                      padding: '0.5rem 0.75rem',
                      background: activeTab === tab ? 'var(--bg-surface)' : 'transparent',
                      border: 'none',
                      borderBottom: activeTab === tab ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                      color: activeTab === tab ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {tab === 'whoami' && './whoami.sh'}
                    {tab === 'stack' && './stack.json'}
                    {tab === 'status' && './status.log'}
                  </button>
                ))}
              </div>

              {/* Terminal Content Body */}
              <div style={{ padding: '1.25rem', fontSize: '0.85rem', lineHeight: '1.7', minHeight: '190px' }}>
                {activeTab === 'whoami' && (
                  <div>
                    <p style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>$ ./whoami.sh</p>
                    <div style={{ color: 'var(--text-body)' }}>
                      <p><span style={{ color: 'var(--accent-cyan)' }}>NAME:</span> Bhuvan MB</p>
                      <p><span style={{ color: 'var(--accent-cyan)' }}>DEGREE:</span> B.E. Computer Science (CGPA 8.5)</p>
                      <p><span style={{ color: 'var(--accent-cyan)' }}>COLLEGE:</span> Yenepoya Institute of Technology</p>
                      <p><span style={{ color: 'var(--accent-cyan)' }}>LOCATION:</span> Shivamogga, Karnataka, India</p>
                      <p><span style={{ color: 'var(--accent-cyan)' }}>FOCUS:</span> Full-Stack Development · Java · Python · AI</p>
                    </div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div>
                    <p style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>$ cat stack.json</p>
                    <pre style={{ color: 'var(--text-body)', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
{`{
  "languages": ["Java", "Python", "JavaScript", "SQL"],
  "backend": ["Spring Boot", "FastAPI", "Flask", "MySQL"],
  "frontend": ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  "ai_ml": ["LangChain", "Hugging Face", "FAISS", "Scikit-Learn"]
}`}
                    </pre>
                  </div>
                )}

                {activeTab === 'status' && (
                  <div>
                    <p style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>$ tail -f status.log</p>
                    <div style={{ color: 'var(--text-body)' }}>
                      <p><span style={{ color: 'var(--accent-emerald)' }}>[READY]</span> Graduate engineer open to immediate role offers</p>
                      <p><span style={{ color: 'var(--accent-cyan)' }}>[SYSTEM]</span> Portfolio projects fully verified & active</p>
                      <p><span style={{ color: 'var(--text-dim)' }}>[CONTACT]</span> Direct email: {personalInfo.email}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Avatar Card with Zoomed Face Framing */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-accent)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid var(--accent-cyan)',
                  boxShadow: '0 0 20px rgba(56, 189, 248, 0.35)',
                  flexShrink: 0,
                  background: 'var(--badge-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    transform: 'scale(1.45)',
                    transformOrigin: 'center 25%'
                  }}
                />
                <span style={{ display: 'none', color: 'var(--accent-cyan)', fontWeight: '700', fontSize: '1.4rem' }}>
                  BMB
                </span>
              </div>

              <div>
                <div style={{ color: 'var(--text-main)', fontWeight: '700', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>{personalInfo.name}</span>
                  <FiCheckCircle style={{ color: 'var(--accent-emerald)', fontSize: '1rem' }} />
                </div>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  B.E. CSE · CGPA 8.5
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                  Full-Stack & Applied AI Engineer
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
