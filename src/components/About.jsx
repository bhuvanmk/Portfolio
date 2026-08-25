import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FiUser, FiBookOpen, FiMapPin, FiBriefcase, FiCheckCircle, FiHash } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ ABOUT ME</span>
          <h2 className="section-title">Background & Core Focus</h2>
          <p className="section-subtitle">
            Solid foundations in computer science theory, software design patterns, and hands-on system development.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Main Narrative */}
          <div style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.8' }}>
            <p>
              I am a <strong>Computer Science & Engineering graduate</strong> (USN: <code>4DM22CS027</code>) from <strong>Yenepoya Institute of Technology</strong>, driven by a deep interest in building reliable, scalable software applications.
            </p>

            <p>
              My primary focus is <strong>Full-Stack Development</strong> with strong core expertise in <strong>Java</strong>, <strong>Python</strong>, and <strong>JavaScript</strong>. On the backend, I construct RESTful microservices and APIs using <strong>Spring Boot</strong> and <strong>Flask</strong> backed by structured relational databases (<strong>MySQL / PostgreSQL</strong>). On the frontend, I create responsive, modular user interfaces with <strong>React.js</strong>.
            </p>

            <p>
              Beyond traditional full-stack architecture, I completed an internship at <strong>Vrishanksoft OPC Pvt. Ltd.</strong> (scoring 98/100) and actively explore practical <strong>AI & Machine Learning applications</strong> — including Retrieval-Augmented Generation (RAG) with LangChain & FAISS, IBM-certified Machine Learning models, and real-time fraud pattern detection.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '2rem'
              }}
            >
              <div
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ color: 'var(--accent-cyan)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                  Full-Stack
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  End-to-end web architectures from React UI to REST services & databases.
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ color: 'var(--accent-emerald)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                  Backend & DB
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Robust Java Spring Boot & Python Flask services with MySQL query design.
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ color: 'var(--accent-indigo)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                  Applied AI & ML
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  IBM Certified Machine Learning, RAG pipelines, and generative AI models.
                </div>
              </div>
            </div>
          </div>

          {/* Recruiter Compact Summary Card */}
          <div
            className="card"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-accent)',
              position: 'sticky',
              top: '90px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingBottom: '1rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <FiUser style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }} />
              <div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Recruiter Quick Profile</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  VERIFIED DEGREE & SKILLS
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <FiUser style={{ color: 'var(--accent-cyan)', marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>FULL NAME</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>{personalInfo.name}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <FiHash style={{ color: 'var(--accent-cyan)', marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>USN / REGISTRATION</div>
                  <div style={{ color: 'var(--accent-emerald)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>4DM22CS027</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <FiBookOpen style={{ color: 'var(--accent-cyan)', marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DEGREE & COLLEGE</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>{personalInfo.degree}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{personalInfo.college}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <FiMapPin style={{ color: 'var(--accent-cyan)', marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>{personalInfo.location}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <FiBriefcase style={{ color: 'var(--accent-cyan)', marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>TARGET ROLE</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>{personalInfo.primaryRole}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)' }}>Java · Python · AI Developer</div>
                </div>
              </div>

              <div
                style={{
                  marginTop: '0.5rem',
                  padding: '0.75rem',
                  background: 'var(--badge-bg)',
                  border: '1px solid var(--badge-border)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-emerald)',
                  fontWeight: '600',
                  fontSize: '0.85rem'
                }}
              >
                <FiCheckCircle style={{ fontSize: '1.1rem' }} />
                <span>Open to Software Development Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
